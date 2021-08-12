module.exports = {

    name: 'mute',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")){
            const target = message.mentions.users.first();
            const wantedtime = args[1] * 60000
            if (target) {
                if (args[0]==="createrole1"){
                    guild.roles.create({
                        data: {
                          name: 'mute',
                          color: 'SILVER',
                        },
                        reason: 'Role for the mute command to work!',
                      })
                        .then(console.log)
                        .catch(console.error);
                }
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
                if (!mainRole){
                    const commandsEmbed4 = new Discord.MessageEmbed()
                    .setColor('#0000')
                    .setDescription("Error: Member role wasn't created.")
                    .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                    return message.channel.send(commandsEmbed4)
                }else if (!muteRole){
                    const commandsEmbed5 = new Discord.MessageEmbed()
                    .setColor('#0000')
                    .setDescription("Error: mute role wasn't created. use '!mute createrole1' to create the mute role.")
                    .setFooter('DoodyBot version 1.2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                    return message.channel.send(commandsEmbed5)
                }

    
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
                .setDescription(`<@${memberTarget.user.id}> has been muted for ${args[1]} mins!`)
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

    

