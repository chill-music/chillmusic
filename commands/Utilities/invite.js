const chalk = require('chalk');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { Routes } = require("discord-api-types/v9");

module.exports = {
    config: {
        name: "invite",
        description: "Invite me to your server!",
        category: "Utilities",
        accessableby: "Members",
        aliases: ["inv"]
    },
    run: async (client, message, args) => {

    (async () => {
        try {
            console.log(chalk.yellowBright(`[invited] by ${message.guild.name}(${message.guild.id})`));
        } catch (error) {
            console.log(error);
            const embed = new MessageEmbed()
                .setDescription("Something went wrong!")
                .setColor("#FF0800");

            message.channel.send({ embed });
        }
    })();

    const embed = new MessageEmbed()
        .setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL({ dynamic: true }) })    
        .setTitle(":information_source: invite Chill Music")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`thank you for inviting\`Chill Music\`\n\`\`\`You can invite me to your server by clicking on (Replace Invite)\`\`\``)
        .setColor("#E7F200")
        .setFooter({ text: `invited by ${message.author.tag}`});

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel("Replace Invite! Recommended")
                .setEmoji("🔗")
                .setStyle("LINK")
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=2184211520&scope=bot%20applications.commands`)
        )
                .addComponents(
                    new MessageButton()
                        .setLabel("Replace Invite with Administrator!")
                        .setEmoji("🔗")
                        .setStyle("LINK")
                        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
        )
                .addComponents(
                    new MessageButton()
                        .setLabel("Support Server!")
                        .setEmoji("<:support:980489808008867850>")
                        .setStyle("LINK")
                        .setURL(`https://discord.gg/RVrRBdBt22`)
        );

    await message.channel.send({ embeds: [embed], components: [row] });

    }
};