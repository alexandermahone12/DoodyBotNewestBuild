const profileModel = require('../models/profileSchema')
module.exports = {
    name: "bankaccount",
    description: "Creates account in database",
    async execute(message, args, cmd, client, Discord, profiledata){
        if (!args.length){
            const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("🪙You've created a bank account! Use !balance to check your balance!🪙")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(commandsEmbed1);
        }else if(args[0] === "reset"){
            const response = await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                }, 
                {
                    $inc: {
                        coins: 0,
                    },
                }
            );  
        }

    }
}