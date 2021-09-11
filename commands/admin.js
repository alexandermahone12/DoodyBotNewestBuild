module.exports = {
    name: 'admin',
    description: 'Null',
    cooldown: 100,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (args[0] === 'selfdestroy'){
            const embed = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING.")
            .setDescription("DELETING JS FILES")
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING..")
            .setDescription("DELETING JSON FILES")
            const embed3 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING...")
            .setDescription("STOPPING SERVER")
            const embed4 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING....")
            .setDescription("DELETING HEROKU SERVER FROM HEROKU")
            const embed5 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING....")
            .setDescription("DELETING ALL LOGS")
            const embed6 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING.....")
            .setDescription("REMOVING BOT FROM ALL SERVERS/ EXCEPTION {REALM}")
            const embed7 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING......")
            .setDescription("CHANGING SERIAL KEY {diojpgw;aiujd48733623784djkha;bjdvahvbda;l}")
            const embed8 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING.......")
            .setDescription("CHANGING CLIENT ID")
            const embed9 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("SELF DESTROYING........")
            .setDescription("DESTROYING CLIENT")
            const embed10 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("DONE....................................")
            .setDescription("Goodbye :(")

            message.channel.send(embed)
            message.channel.send(embed2)
            message.channel.send(embed2)
            message.channel.send(embed3)
            message.channel.send(embed4)
            message.channel.send(embed5)
            message.channel.send(embed6)
            message.channel.send(embed7)
            message.channel.send(embed8)
            message.channel.send(embed9)
            message.channel.send(embed10)


        }
    }
}