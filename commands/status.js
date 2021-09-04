const moment = require('moment');
require('moment-duration-format')
module.exports = {
    name: 'status',
    description: "Downtime",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const reason = 'development'
        const commandsEmbed1 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setDescription(`Last recorded downtime was ${duration} ago! Reason: ${reason}`)
        
    }
}