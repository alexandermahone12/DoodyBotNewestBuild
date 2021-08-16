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
                const commandsEmbed1 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("List of commands")
                .setDescription(Myarray)
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed1);
            }else if (args[0] === 'admintest'){
                const commandsEmbed2 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("Admintest command info")
                .setDescription("The admintest command creates an embed that tells you if you have admin permissions or not. \n example: !admintest 'YOU HAVE PERMS :)'")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed2);
            }else if(args[0] === 'avatar'){
                const commandsEmbed3 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("Avatar command info")
                .setDescription("Creates an embed that shows you your avatar/Shows the mentioned person's avatar! Example: !avatar @Doody ")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed3);
            }else if(args[0] === 'botinvite'){
                const commandsEmbed4 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("botinvite command info")
                .setDescription("Sends you the doodybot invite code!")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed4);
            }else if(args[0] === 'clear'){
                const commandsEmbed5 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("clear command info")
                .setDescription("deletes the amount of messages typed in the arguement!")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed5);
            }else if(args[0] === 'lock'){
                const commandsEmbed5 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("lock command info")
                .setDescription("Locks a channel(stops anyone from sending any messages)")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed5);
            }else if(args[0] === 'unlock'){
                const commandsEmbed5 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("unlock command info")
                .setDescription("redoes lock command")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed5);
            }
        }
    }
 
}