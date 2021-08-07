
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle("Avatar!")
        .addFields(
            {name: `${member.username}'s avatar`, value: ""},
        )
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);

    }
 
}