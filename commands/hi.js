module.exports = {

    name: 'hi',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Hello! This is DoodyBot! To find out what i can do, use the command /commands');

    }
 
}