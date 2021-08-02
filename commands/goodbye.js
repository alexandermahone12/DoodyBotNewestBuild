module.exports = {

    name: 'goodbye',
    description: "says bye",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Goodbye! see you later.');

    }
 
}