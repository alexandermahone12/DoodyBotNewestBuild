module.exports = {

    name: 'status',
    aliases: ['botstatus', 'developmentstatus'],
    description: "says the status of the bot",
    execute(message, args, cmd, client, Discord, profiledata) {
        message.reply('DoodyBot version 1.1. for suggestions / report bugs contact @doody!');
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#554846')
        .setTitle('Version 1.1 Features and Bug fixes')
        .addFields(
            {name: "Bugs:", value: "The music player command was removed, isaid command was removed, marryme commmand was removed, member commands was removed, goodbye command was removed, mute & unmute commands are being improved, admin panel was removed."},
            {name: "Features:", value: "Avatar command was enhanced, Doodybot is not out of the BETA phase, DoodyBot is being hosted on a heroku server, Meaning doodybot is online 24/7"},
            {name: "Upcoming:", value: "[Link shortener](https://bitly.com/). A new  fast music player (this will replace the old slow one), server Nickname changer, suggestions channel + warn command"},
            {name: "Server downtime:", value: "12/8/2021 for 20 mins"},
            
        )
        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);

    }
 
}