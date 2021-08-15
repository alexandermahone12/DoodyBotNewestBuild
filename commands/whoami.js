module.exports = {

    name: 'whoami',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            let user = message.mentions.users.first() || message.author;
            const embed = new Discord.MessageEmbed()
            .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`You are ${user.tag}, you joined ${message.guild} in ${user.joinedAt}, you have the following roles: ${user.roles}.`)
            .setColor("RANDOM")

            message.channel.send(embed);
        }
    }
 
}