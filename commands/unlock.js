module.exports = {

    name: 'unlock',
    description: "Unlocks a channel!",
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.member.permissions.has("ADMINISTRATOR")){
                const role = message.guild.roles.cache.find(role => role.name === 'verified') 
                message.channel.updateOverwrite(role,{ 'SEND_MESSAGES': true})   
                message.channel.send(`unlocked **${message.channel.name}**`)
        
            }
    }}
}   