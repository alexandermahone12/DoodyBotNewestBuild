const tiktok = require('tiktok-scraper')
module.exports = {
    name: 'tiktok',
    description: 'searches for a tiktok account and returns the corresponding  information',
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (!args.length) {
            const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle('command under development.')
            message.channel.send(commandsEmbed1)
            return    
        }
        const info = tiktok.getUserProfileInfo(args[0], options)
        const commandsEmbed2 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle(`Tiktok (@${args[0]})`)
        .setDescription(`Info: ${info}`)
        message.channel.send(commandsEmbed2)
    
    }
}