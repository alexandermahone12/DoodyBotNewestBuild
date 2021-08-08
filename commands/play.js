module.exports = {

    name: 'play',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('The music command is being improved! For more information use (/status). sorry for the inconvenience.');

    }
 
}