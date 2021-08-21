const profileModel = require('../models/profileSchema')
module.exports = {
    name: "withdraw",
    description: "Tells you your coin balance",
    async execute(message, args, cmd, client, Discord, profiledata){
        const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("🪙Withdraw error:")
            .setDescription(`Withdraw amount must be a whole number!`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        const commandsEmbed2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("🪙Withdraw error:")
            .setDescription(`You don't have that amount of coins in your bank to withdraw!`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        const amount = args[0];
        if (amount %1 != 0 || amount <= 0) return message.channel.send(commandsEmbed1);
        try{
            if (amount > profiledata.bank) return message.channel.send(commandsEmbed2);
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount
                }
            }
            
            );
            const commandsEmbed3 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("🪙Withdraw:")
                .setDescription(`You withdrew ${amount} coins into your wallet!`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(commandsEmbed3)
        }catch(err){
            console.log(err)
        }
    
    }
}