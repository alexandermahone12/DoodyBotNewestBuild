module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.channel.id === "875059824457560154"){
            if(message.member.roles.cache.has('874736823488901180')){
                message.reply("You are already verified! Please don't spam this command.")
            }else{
                if(profiledata.banned === "Yes") return message.channel.send("You've been banned. You cannot enter realm anymore.")
                message.member.roles.remove('875704950804578304');
                message.member.roles.add('874736823488901180');
                message.reply('Youve been verified!')
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle('Welcome to **Realm**!')
                .setDescription(`Hey ${message.author.tag}, welcome to **Realm**! We're delighted to have you here! Please follow the rules and enjoy!`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                message.author.send(commandsEmbed);
            }
        }else{
            message.reply("You can only use this command in Doody's server / verify channel.")
        }
            

    }}
}