module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {

            if (args[0] === 'init'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#0000')
                .setTitle("List of colors")
                .setDescription("a")
                .setDescription("a")
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed);

            }
        }
    }
