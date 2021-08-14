
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})


            const embed = new Discord.MessageEmbed()
            .setTitle(`${member.username}'s avatar`)
            .setImage(avatar)
            .setColor("RANDOM")
            let button = new disbut.MessageButton()
            .setStyle('url') //default: blurple
            .setLabel('Download avatar') //default: NO_LABEL_PROVIDED
            .setURL(avatar) //note: if you use the style "url" you must provide url using .setURL('https://example.com')
            .setDisabled(false); //disables the button | default: false
            message.channel.send(embed, button);
        }
    }
 
}