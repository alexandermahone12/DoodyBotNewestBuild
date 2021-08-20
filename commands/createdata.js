
module.exports = {
    name: "bankaccount",
    description: "Creates account in database",
    execute(message, args, cmd, client, Discord, profiledata){
                
        const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("🪙You've created a bank account! Use !balance to check your balance!🪙")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(commandsEmbed1);
    }
}