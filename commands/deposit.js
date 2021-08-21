const profileModel = require('../models/profileSchema')
module.exports = {
    name: "deposit",
    description: "Tells you your coin balance",
    async execute(message, args, cmd, client, Discord, profiledata){
        const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("🪙Deposit error:")
            .setDescription(`Deposit amount must be a whole number!`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        const commandsEmbed2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("🪙Deposit error:")
            .setDescription(`You don't have that amount of coins to depoist!`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        const amount = args[0];
        if (amount %1 != 0 || amount <= 0) return message.channel.send(commandsEmbed1);
        try{
            if (amount > profiledata.coins) return message.channel.send(commandsEmbed2);
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                    bank: amount
                }
            }
            
            );
            const commandsEmbed3 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("🪙Deposit:")
                .setDescription(`You've deposited ${amount} coins into your bank!`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(commandsEmbed3)
        }catch(err){
            console.log(err)
        }
    
    }
}