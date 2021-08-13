module.exports = {

    name: 'hi',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setDescription('Hello! This is [DoodyBot](https://doodybot2021.wixsite.com/doodybot)! To find out what i can do, use the command /commands.')
        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);


    }
 
}