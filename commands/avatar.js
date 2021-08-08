
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 2000})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);

    }
 
}