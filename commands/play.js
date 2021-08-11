module.exports = {

    name: 'play',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setDescription('The music command is being improved! For more information use (/status). sorry for the inconvenience.')
        .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);

    }
 
}