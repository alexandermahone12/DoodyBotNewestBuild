module.exports = {

    name: 'isaid',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {
        const message = args[0]
        if (!args.length){
            return message.channel.send('What would you like to say?')
        }
        else{
            let name = message.author.username;
            message.channel.send(`${name} said ${message}`);
        }

    }
 
}