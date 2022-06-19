const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Playlist = require('../../settings/models/Playlist.js');

const TrackAdd = [];

module.exports = { 
    name: "savequeue",
    description: "Save the current queue to a playlist",
    options: [
        {
            name: "name",
            description: "The name of the playlist",
            required: true,
            type: 3
        }
    ],
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });

        const value = interaction.options.getString("name");

        try {
            if (user && user.isPremium) {

                const Plist = value.replace(/_/g, ' ');

                const playlist = await Playlist.findOne({ name: Plist });
                if(!playlist) return interaction.editReply(`${client.i18n.get(language, "playlist", "savequeue_notfound")}`);
                if(playlist.owner !== interaction.user.id) return interaction.editReply(`${client.i18n.get(language, "playlist", "savequeue_owner")}`);

                const player = client.manager.get(interaction.guild.id);
                if (!player) return interaction.editReply(`${client.i18n.get(language, "noplayer", "no_player")}`);
                const { channel } = interaction.member.voice;
                if (!channel || interaction.member.voice.channel !== interaction.guild.me.voice.channel) return interaction.editReply(`${client.i18n.get(language, "noplayer", "no_voice")}`);

                const queue = player.queue.map(track => track);
                const current = player.queue.current;

                TrackAdd.push(current);
                TrackAdd.push(...queue);

                const embed = new MessageEmbed()
                    .setDescription(`${client.i18n.get(language, "playlist", "savequeue_saved", {
                        name: Plist,
                        tracks: queue.length + 1
                        })}`)
                    .setColor(client.color)

                interaction.editReply({ embeds: [embed] });

                playlist.tracks.push(...TrackAdd);
                playlist.save().then(() => {
                    TrackAdd.length = 0;
                });

    } else {
        const Premiumed = new MessageEmbed()
            .setAuthor({ name: `${client.i18n.get(language, "nopremium", "premium_author")}`, iconURL: client.user.displayAvatarURL() })
            .setDescription(`${client.i18n.get(language, "nopremium", "premium_desc")}`)
            .setColor(client.color)
            .setTimestamp()

            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Get Free Premium")
                    .setEmoji("<:premium:980510994214314015>")
                    .setStyle("LINK")
                    .setURL(`https://discord.gg/DBhmbAyykP`)
            )

        return interaction.editReply({ content: " ", embeds: [Premiumed], components: [row] });
      }
    } catch (err) {
        console.log(err)
        interaction.editReply({ content: `${client.i18n.get(language, "nopremium", "premium_error")}` })
        }
    }
};