module.exports = {

    name: 'unlock',
    description: "Unlocks a channel!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("KICK_MEMBERS")){
            const role = message.guild.roles.cache.find(role => role.name === 'member') 
            message.channel.updateOverwrite(role,{ 'SEND_MESSAGES': true})   
            message.channel.send(`unlocked **${message.channel.name}**`)
    
        }
    }
}   