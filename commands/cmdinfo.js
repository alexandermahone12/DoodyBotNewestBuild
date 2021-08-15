module.exports = {

    name: 'info',
    description: "Info about certain command",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if (!args.length){
                return message.channel.send("The info command shows you info about a certain command, type the command name as an arguement. If you dont know what the doodybotcommands are, use !info list.")
            }else if(args[0] === 'list'){
                var Myarray = [
                    "admintest",
                    "avatar",
                    "botinvite",
                    "clear",
                    "hi",
                    "lock",
                    "unlock",
                    "mute",
                    "unmute",
                    "report",
                    "serverinfo",
                    "status",
                    "suggest",
                    "tempchat",
                    "tempvoice",
                    "verify",
                    "whoami",
                    "ytg"
                ];
                message.channel.send(Myarray);
            }
        }
    }
 
}