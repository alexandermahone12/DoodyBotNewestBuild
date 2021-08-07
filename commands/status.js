module.exports = {

    name: 'status',
    aliases: ['botstatus', 'developmentstatus'],
    description: "says the status of the bot",
    execute(message, args, cmd, client, Discord) {
        message.reply('DoodyBot version 1.0. for suggestions / report bugs contact @doody!');

    }
 
}