module.exports = {

    name: 'mute',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")){
            const target = message.mentions.users.first();
            const wantedtime = args[1] * 60000
            if (target) {
    
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    const commandsEmbed1 = new Discord.MessageEmbed()
                    .setColor('#0000')
                    .setDescription(`<@${memberTarget.user.id}> has been muted`)
                    .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                    message.channel.send(commandsEmbed1)
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                const commandsEmbed2 = new Discord.MessageEmbed()
                .setColor('#0000')
                .setDescription(`<@${memberTarget.user.id}> has been muted for ${args[1]}`)
                .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed2)
    
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                },wantedtime);
            } else {
                const commandsEmbed3 = new Discord.MessageEmbed()
                .setColor('#0000')
                .setDescription(`Error: Cant find that member!`)
                .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed3)
            }
        }
    }
}

    

