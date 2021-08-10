module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {

            if (args[0] === 'init'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#0000')
                .setTitle("List of colors")
                .addFields(
                    {name: "<:redcolor:874703436241838202> : <@&872060134833147906>", value: "\u200b"},
                    {name: "<:greencolor:874703023031586836> : <@&874681708765651024>", value: "\u200b"},
                    {name: "<:purplecolor:874702566959775814> : <@&874671480162635837>", value: "\u200b"},
                    {name: "<:pinkcolor:874702329767678063> : <@&874682308421111848>", value: "\u200b"},
                )
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed);

            }
        }
    }
