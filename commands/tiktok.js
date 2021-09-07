module.exports = {
    name: 'tiktok',
    description: 'searches for a tiktok account and returns the corresponding  information',
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        const commandsEmbed1 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle('command under development.')
        message.channel.send(commandsEmbed1)
        return
    
    
    }
}