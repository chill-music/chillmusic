const chalk = require('chalk');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { Routes } = require("discord-api-types/v9");

module.exports = {
    config: {
        name: "vote",
        description: "vote chill music!",
        category: "Utilities",
        accessableby: "Members",
        aliases: ["vo"]
    },
    run: async (client, message, args) => {

    (async () => {
        try {
            console.log(chalk.yellowBright(`[requested vote] by ${message.guild.name}(${message.guild.id})`));
        } catch (error) {
            console.log(error);
            const embed = new MessageEmbed()
                .setDescription("Something went wrong!")
                .setColor("#FF0800");

            message.channel.send({ embed });
        }
    })();

    const embed = new MessageEmbed()
        .setAuthor({ name: client.user.tag, iconURL: message.guild.iconURL({ dynamic: true }) })    
        .setTitle("<:animevote:983451374316576799> **Vote Chill Music To Support us**")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Thanks For Choosing Chill Music**`)
        .setColor("#E7F200")
        .setFooter({ text: `Voted by ${message.author.tag}`});

    const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel("Vote me on Top.gg")
                        .setEmoji("<:upvote:983458657943564319>")
                        .setStyle("LINK")
                        .setURL(`https://top.gg/bot/802012038259802204`)
        )
                .addComponents(
                   new MessageButton()
                      .setLabel("Vote me on Discordbotlist.com")
                      .setEmoji("<:upvote:983458657943564319>")
                      .setStyle("LINK")
                      .setURL(`https://discord.ly/chill-music-2603`)
        );

    await message.channel.send({ embeds: [embed], components: [row] });

    }
};