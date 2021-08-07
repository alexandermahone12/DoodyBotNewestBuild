module.exports = {

    name: 'credits',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {

        message.channel.send('Bot made by Doody using javascript, python, ytdl-core and the discord API module.')

    }
 
}