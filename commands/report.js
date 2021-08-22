
module.exports = {

    name: 'report',
    description: "reports the mentioned person!",
    cooldown: 15,
    execute(message, args, cmd, client, Discord, profiledata, prefix) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            const target = message.mentions.users.first();
            if (target){

            
                if (!args[1]){
                    return message.channel.send("What do you want to report the person for?")
            }else{
                let memberTarget = message.guild.members.cache.get(target.id);
                let messageArgs = args.join(' ');
                const channel = message.guild.channels.cache.find(c => c.id === '875513870360395867');
                if(!channel){
                    return message.channel.send("This command can only be used on Doody's server.")
                }
                const embed = new Discord.MessageEmbed()
                .setColor("#554846")
                .setDescription(`Report: ${messageArgs}`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                channel.send(embed)
                const embed1 = new Discord.MessageEmbed()
                .setColor("#554846")
                .setTitle('Your report has been sent!')
                .setDescription(`Your report has been successfully sent to the server mods. report was: ${messageArgs}`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                message.author.send(embed1)
                
            }



        }else{
            message.channel.send("Please mention the person you want to report.")
        }
}}
 
}
