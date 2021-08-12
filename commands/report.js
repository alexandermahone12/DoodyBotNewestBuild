
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
            let messageArgs = args.join(' ');
            const channel = message.guild.channels.cache.find(c => c.id === '875513870360395867');
            if(!channel){
                message.channel.send("This command can only be used on Doody's server.")
            }
            if (!channel){
                message.channel.send("Channel doesnt exist")
            }
            const embed = new Discord.MessageEmbed()
            .setColor("0000")
            .setDescription(`Report: ${messageArgs}`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            channel.send(embed)
            message.delete();
            
        }



    }else{
        message.channel.send("Please mention the person you want to report.")
    }
}
 
}
