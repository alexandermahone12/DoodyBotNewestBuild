module.exports = {
    name: 'embed',
    aliases: ['createembed', 'makeembed'],
    description: 'Null',
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const title = args[0]
        const description = args[1]
        const footer = args[2]
        const imagelink = args[3]
        
        const embed3 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle(title)
            .setDescription(description)
            .setFooter(footer)
            .setImage(imagelink)
        message.channel.send(embed3)
        return
    }
}