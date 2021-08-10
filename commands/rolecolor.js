module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {

            if (args[0] === 'init'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#0000')
                .setTitle("List of colors")
                .addFields(
                    {name: ":redcolor: >", value: "@redcolor"},
                    {name: ":greencolor: >", value: "@greencolor"},
                    {name: ":purplecolor: >", value: "@purplecolor"},
                    {name: ":pinkcolor: >", value: "@pinkcolor"},
                )
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed);

            }
        }
    }
