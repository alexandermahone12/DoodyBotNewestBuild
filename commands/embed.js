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

        if (!title.length && !description.length && !footer.length){
            const embed = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("Error")
            .setDescription("All arguments need to be filled. Example: !embed (title) (description) (Footer) (ImageLink)(optional)")
            message.channel.send(embed)
            return
        }
        if (!imagelink.length){
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle(title)
            .setDescription(description)
            .setFooter(footer)
            message.channel.send(embed2)
            return
        }
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