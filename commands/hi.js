module.exports = {

    name: 'hi',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setAuthor("DoodyBot version 1.1", "https://i.postimg.cc/zftSmvqt/shadow.png")
        .setDescription('Hello! This is [DoodyBot](https://doodybot2021.wixsite.com/doodybot)! To find out what i can do, use the command /commands.')
        .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);


    }
 
}