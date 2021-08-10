
module.exports = {

    name: 'warn',
    aliases: ['warnuser', 'warnembitches'],
    description: "says the status of the bot",
    execute(message, args, cmd, client, Discord) {
        let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")
        if (!dUser) return message.channel.send("Can't find user!")
        let dMessage = args.join(" ").slice(22);
        if (dMessage.length < 1) return message.reply('what is the reason???')

        dUser.send(`${dUser}, You have been warned for doing ${dMessage} in the server ${message.guild.name}`)

        message.channel.send(`${dUser} has been warned for doing ${dMessage} :thumbsdown: !`)
        }
 
}