module.exports = {

    name: 'unmute',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
    
                let memberTarget= message.guild.members.cache.get(target.id);
                const commandsEmbed1 = new Discord.MessageEmbed()
                .setColor('#0000')
                .setDescription(`<@${memberTarget.user.id}> has been unmuted`)
                .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(commandsEmbed1);
            } else{
                const commandsEmbed2 = new Discord.MessageEmbed()
                .setColor('#0000')
                .setDescription('Error: Cant find that member :(')
                .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed2);
            }    }
    }
}


