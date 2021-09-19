module.exports = {
    name: "leaderboard",
    aliases: ["leader", "top", "best"],
    description: "None",
    cooldown: 3,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const embed = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("LeaderBoard")
        .setDescription(`You've sent ${profiledata.message} messages.`)
        message.channel.send(embed)
    }
}