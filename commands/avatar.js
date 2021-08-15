
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})


            const embed = new Discord.MessageEmbed()
            .setTitle("Avatar command!")
            .setDescription(`${member.username}'s avatar`)
            .setImage(avatar)
            .setFooter(`[Download](${member.displayAvatarURL({size: 1024})}) ${member.username}'s avatar`)
            .setColor("RANDOM")

            message.channel.send(embed);
        }
    }
 
}