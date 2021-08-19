
module.exports = {
    name: "balance",
    description: "Tells you your coin balance",
    execute(message, args, cmd, client, Discord, profiledata){
                
        const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle(`**${message.author.tag}'s** balance!`)
            .setDescription(`Your wallet balance is ${profiledata.coins}, your bank balance is ${profiledata.bank}!`)
            .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
            message.channel.send(commandsEmbed1);
    }
}