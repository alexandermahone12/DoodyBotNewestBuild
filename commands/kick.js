module.exports = {
    name: 'kick',
    description: 'Null',
    permissions: ["KICK_MEMBERS"],
    cooldown: 5,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {

        const target = message.mentions.members.first()
        if (!target) {
            const embed1 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("Error")
            .setDescription("User does not exist in this server")
            message.channel.send(embed1);
            return
        }


            target.kick('not cool man')
            .then(async(target) => {
                
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
            }).catch(() => {
                // Failmessage
                message.channel.send("Error");
            });
            



        

    }
}