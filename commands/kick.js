module.exports = {
    name: 'kick',
    description: 'Null',
    permissions: ["KICK_MEMBERS"],
    cooldown: 5,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {

        const target = message.mentions.users.first();
        if (!target) {
            const embed1 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("Error")
            .setDescription("User does not exist in this server")
            message.channel.send(embed1);
            return
        }

        try {
            target.kick()
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultolor)
            .setTitle(`Kicked!`)
            .setDescription(`You've kicked ${target.tag} successfully`)
            message.channel.send(embed2);
            await profileModel.findOneAndUpdate(
                {
                  userID: target.id,
                  banned: "Yes",

                },
            );

        }
        catch {
            const embed3 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle('Error')
            .setDescription(`An error has occurred while trying to kick ${target.tag}`)
            message.channel.send(embed3)
        }
        

    }
}