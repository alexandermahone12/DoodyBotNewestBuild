
module.exports = {

    name: 'ping',
    description: "says hi",
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        const commandsEmbed2 = new Discord.MessageEmbed()
        .setColor(commonjson.failcolor)
        .setTitle("Your ping:")
        .setDescription(`Your latency is **${Date.now() - message.createdTimestamp}** ms. The API Latency is **${Math.round(client.ws.ping)}** ms, for a more detailed answer click [this](https://discordstatus.com/)`)
        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed2);

    }
 
}