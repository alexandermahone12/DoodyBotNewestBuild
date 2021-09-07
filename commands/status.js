const moment = require('moment');
require('moment-duration-format')
module.exports = {
    name: 'status',
    description: "Downtime",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const reason = 'server issues'
        const commandsEmbed1 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("DoodyBot status")
        .setDescription(`Last recorded downtime was ${duration} ago! Reason: ${reason}`)
        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png')
        message.channel.send(commandsEmbed1)
        
    }
}