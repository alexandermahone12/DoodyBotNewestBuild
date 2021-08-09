module.exports = {

    name: 'admintest',
    description: "Clear messages!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("KICK_MEMBERS")){
            const commandsEmbed = new Discord.MessageEmbed()
            .setColor('#0000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('You have perms :)');
            message.channel.send(commandsEmbed);
    
    }else{
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('You do not have perms :(');
        message.channel.send(commandsEmbed);
    }
}
}