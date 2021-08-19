
module.exports = {
    name: "balance",
    description: "Tells you your coin balance",
    execute(message, args, cmd, client, Discord, profiledata){
                
        const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .addFields(
                {name: "Wallet:", value: `${profiledata.coins} coins`},
                {name: "Bank:", value: `${profiledata.bank} coins`},
            )
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(commandsEmbed1);
    }
}