
module.exports = {

    name: 'prefix',
    description: "creates an invite for the bot",
    execute(message, args, cmd, client, Discord, profiledata, prefix) {
        if (!args.length){
            message.channel.send("What would you like to change the prefix to?")
            return
        }
        const changed = args[0]
        prefix = changed
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#554846')
        .setTitle(`Prefix changed to ${prefix}`)
        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);

    }
 
}