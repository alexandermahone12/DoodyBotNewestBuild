module.exports = {

    name: 'lock',
    description: "Clear messages!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            const role2 = message.guild.roles.cache.find(role => role.name === 'member') 
            message.channel.updateOverwrite(role2,{ 'SEND_MESSAGES': false}) 
            message.channel.send("locked **${message.channel.name}**")
    
        }
    }
}