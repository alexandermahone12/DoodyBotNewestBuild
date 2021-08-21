const profileModel = require('../models/profileSchema')
module.exports = {
    name: "beg",
    cooldown: 15,
    description: "Begs for coins",
    async execute(message, args, cmd, client, Discord, profiledata){
        const randomNumber = Math.floor(Math.random() * 300) + 1;
        const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setDescription(`You've been given ${randomNumber} coins!`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        const response = await profileModel.findOneAndUpdate(
        {
            userID: message.author.id,
        }, 
        {
            $inc: {
                coins: randomNumber,
            },
        }
    );
        return message.channel.send(commandsEmbed1);
        
    },
};