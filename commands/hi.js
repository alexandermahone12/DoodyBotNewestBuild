module.exports = {

    name: 'hi',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        const embed = new discord.MessageEmbed()
        .setColor('#0000')
        .setDescription('Hello! This is [DoodyBot](https://doodybot2021.wixsite.com/doodybot)! To find out what i can do, use the command /commands.')
        message.channel.send(commandsEmbed);


    }
 
}