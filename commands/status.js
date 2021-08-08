module.exports = {

    name: 'status',
    aliases: ['botstatus', 'developmentstatus'],
    description: "says the status of the bot",
    execute(message, args, cmd, client, Discord) {
        message.reply('DoodyBot version 1.1. for suggestions / report bugs contact @doody!');
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setTitle('Update 1.1 Features and Bug fixes')
        .addFields(
            {name: "Bugs:", value: "The music player command was removed. isaid command was removed. marryme commmand was removed. member commands was removed. goodbye command was removed. mute & unmute commands were removed."},
            {name: "Features:", value: "Avatar command was enhanced. Doodybot is not out of the BETA phase. DoodyBot is being hosted on a heroku server, Meaning doodybot is online 24/7"},
            {name: "Upcoming:", value: "[Link shortener](https://bitly.com/). A new super fast music player (this will replace the old slow one). server Nickname changer + Automatic role color changer. suggestions channel + reports channel."},
            
        )
        message.channel.send(commandsEmbed);

    }
 
}