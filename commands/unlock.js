module.exports = {

    name: 'clear',
    description: "Clear messages!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            const role = message.guild.roles.cache.find(role => role.name === 'member') 
            message.channel.updateOverwrite(role,{ 'SEND_MESSAGES': true})   
            message.channel.send("unlocked **${message.channel.name}**")
    
        }
    }
}   