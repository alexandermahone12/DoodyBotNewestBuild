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
                const commandsEmbed6 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("clear command info")
                .setDescription("deletes the amount of messages typed in the arguement! Example: !clear 50")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed6);
            }else if(args[0] === 'lock'){
                const commandsEmbed7 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("lock command info")
                .setDescription("Locks a channel(stops anyone from sending any messages)")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed7);
            }else if(args[0] === 'unlock'){
                const commandsEmbed8 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("unlock command info")
                .setDescription("redoes lock command.")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed8);
            }else if(args[0] === 'mute'){
                const commandsEmbed9 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("mute command info")
                .setDescription("Stops the mentioned person after command from sending messages")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed9);
            }else if(args[0] === 'unmute'){
                const commandsEmbed10 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("unmute command info")
                .setDescription("Undoes mute command")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed10);
            }else if(args[0] === 'report'){
                const commandsEmbed11 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("report command info")
                .setDescription("Reports the mentioned person after the command + the reason. Example: !report @Doody For not following the rules ")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed11);
            }else if(args[0] === 'serverinfo'){
                const commandsEmbed12 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("serverinfo command info")
                .setDescription("Creates an embed that includes information about the server. The owner, creation date, members, profile picture and name!")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed12);
            }else if(args[0] === 'status'){
                const commandsEmbed13 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("status command info")
                .setDescription("Creates an embed that includes information about the latest doodybot update.")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed13);
            }else if(args[0] === 'suggest'){
                const commandsEmbed14 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("suggest command info")
                .setDescription("creates an embed with your suggestion in the suggestions channel! Example: !suggest Creating a new role called Hello")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed14);
            }else if(args[0] === 'ytg'){
                const commandsEmbed15 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("ytg command info")
                .setDescription("Creates a youtube together activity! Try this out!")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed15);
            }
        }
    }
 
}