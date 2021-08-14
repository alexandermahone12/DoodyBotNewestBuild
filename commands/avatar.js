
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})

            let button = new Discord.MessageButton()
            .setStyle('blurple') //default: blurple
            .setLabel('Dwadwadadadad') //default: NO_LABEL_PROVIDED
            .setID('https://www.google.com/') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
            .setDisabled(false); //disables the button | default: false
            const embed = new Discord.MessageEmbed()
            .setTitle(`${member.username}'s avatar`)
            .setImage(avatar)
            .setColor("RANDOM")
            
            message.channel.send(embed, button);
        }
    }
 
}