
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord, profiledata) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})
            let download = member.displayAvatarURL({size: 1024})

            const embed = new Discord.MessageEmbed()
            .setTitle("Avatar command!")
            .setDescription(`${member.username}'s [avatar](${download})`)
            .setImage(avatar)
            .setFooter(`${message.author.tag} || To get your friend's avatar, tag them after the command!`)
            .setColor("#554846")

            message.channel.send(embed);
        }
    }
 
}