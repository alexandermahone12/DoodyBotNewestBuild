const { MessageButton } = require("discord-buttons")
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord, profiledata) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})

            const embed = new Discord.MessageEmbed()
                .setTitle("Avatar command!")
                .setDescription(`${member.username}'s [avatar](${avatar})`)
                .setImage(avatar)
                .setFooter(`${message.author.tag} || To get your friend's avatar, tag them after the command!`)
                .setColor("#554846")
            const download_button = new MessageButton()
                .setStyle("url")
                .setLabel("Download")
                .setURL(avatar)
            message.channel.send(embed, download_button);
        }
    }
 
}