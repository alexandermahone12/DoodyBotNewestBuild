module.exports = {

    name: 'lock',
    description: "Locks a channel!",
    execute(message, args, cmd, client, Discord, profiledata) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.member.permissions.has("ADMINISTRATOR")){
                const role2 = message.guild.roles.cache.find(role => role.name === 'verified') 
                message.channel.updateOverwrite(role2,{ 'SEND_MESSAGES': false}) 
                message.channel.send(`locked **${message.channel.name}**`)
        
            }    }
    }
}