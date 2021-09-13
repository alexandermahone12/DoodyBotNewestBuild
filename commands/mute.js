const profileModel = require("../models/profileSchema");
module.exports = {

    name: 'mute',
    description: "None",
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if (message.member.permissions.has("ADMINISTRATOR")){
                const target = message.mentions.users.first();
                const wantedtime = args[1] * 60000
                if (target) {
        
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'verified');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
                    if (!mainRole){
                        const commandsEmbed4 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setDescription("Error: verified role wasn't created.")
                        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                        return message.channel.send(commandsEmbed4)
                    }else if (!muteRole){
                        const commandsEmbed5 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setDescription("Error: mute role wasn't created.")
                        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                        return message.channel.send(commandsEmbed5)
                    }

        
                    let memberTarget = message.guild.members.cache.get(target.id);
        
                    if (!args[1]) {
                        memberTarget.roles.remove(mainRole.id);
                        memberTarget.roles.add(muteRole.id);
                        const commandsEmbed1 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setDescription(`<@${memberTarget.user.id}> has been muted`)
                        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                        message.channel.send(commandsEmbed1)
                        return
                    }
                    await profileModel.findOneAndUpdate(
                        {
                          userID: target.id,
                          banned: "Yes",

                        },
                    );
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    
                    const commandsEmbed2 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setDescription(`<@${memberTarget.user.id}> has been muted for ${args[1]} mins!`)
                    .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                    message.channel.send(commandsEmbed2)
        
                    setTimeout(function () {
                        await profileModel.findOneAndUpdate(
                            {
                              userID: target.id,
                              banned: "No",
    
                            },
                        );
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                        const commandsEmbed6 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setDescription(`<@${memberTarget.user.id}> has been unmuted after being muted for ${args[1]} mins!`)
                        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                        message.channel.send(commandsEmbed6)
                    },wantedtime);
                } else {
                    const commandsEmbed3 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setDescription(`Error: Cant find that member!`)
                    .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                    message.channel.send(commandsEmbed3)
                }}
        }
    }
}

    

