
module.exports = {

    name: 'report',
    description: "reports the mentioned person!",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target){

        
            if (!args[1]){
                return message.channel.send("What do you want to report the person for?")
        }else{
            let memberTarget = message.guild.members.cache.get(target.id);
            const channel = message.guild.channels.cache.find(c => c.id === '874348107314384996');
            if (!channel){
                message.channel.send("Channel doesnt exist")
            }
            const embed = new Discord.MessageEmbed()
            .setColor("0000")
            .setDescription(`<@${memberTarget.user.id}> has been reported for ${args[1]}`)
            channel.send(embed)
            
        }



    }else{
        message.channel.send("Please mention the person you want to report.")
    }
}
 
}
