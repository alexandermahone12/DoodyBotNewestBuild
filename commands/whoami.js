module.exports = {

    name: 'whoami',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`You are ${message.author.tag}, you joined ${message.guild} in ${message.guild.member.joinedAt}, you have the following roles: ${message.guild.member.roles}`)
            .setImage(avatar)
            .setColor("RANDOM")

            message.channel.send(embed);
        }
    }
 
}