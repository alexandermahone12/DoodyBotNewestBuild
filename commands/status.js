module.exports = {

    name: 'status',
    aliases: ['botstatus', 'developmentstatus'],
    description: "says the status of the bot",
    execute(message, args, cmd, client, Discord) {
        message.reply('BETA version. Still in development');

    }
 
}