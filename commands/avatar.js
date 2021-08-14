
module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        const disbut = require("discord-buttons")(client);
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})


            const embed = new Discord.MessageEmbed()
            .setTitle(`${member.username}'s avatar`)
            .setImage(avatar)
            .setColor("RANDOM")

            const button = new disbut.MessageButton()
            .setLabel("This is a button!")
            .setID("myid")
            .setStyle("blurple");
            message.channel.send(embed,button);
        }
    }
 
}