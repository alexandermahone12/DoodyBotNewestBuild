const { MessageButton } = require("discord-buttons");

module.exports = {

    name: 'avatar',
    description: "shows the profile pic",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{

            let member = message.mentions.users.first() || message.author

            let avatar = member.displayAvatarURL({dynamic : true, size: 1024})

            let button = new MessageButton()
                .setStyle('red')
                .setLabel('My First Button!') 
                .setID('click_to_function');

            message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
            const embed = new Discord.MessageEmbed()
            .setTitle(`${member.username}'s avatar`)
            .setImage(avatar)
            .setColor("RANDOM")
            
            message.channel.send(embed);
        }
    }
 
}