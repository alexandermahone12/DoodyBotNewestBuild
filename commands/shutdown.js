module.exports = {
    name: 'shutdown',
    description: "creates a temp chat",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if (!args.length){
                message.channel.send("Please enter the password.")
            }
            if (args[0]==='Abooodi1212'){
                message.delete()
                console.log("SHUTDOWN MODE")
                message.channel.send("Shutting down...").then(() => {
                client.destroy();
            })
        }else{
            console.log("INCORRECT PASSWORD!")
            message.channel.send("Password incorrect. reporting to server.")
        }
        }
    }
}