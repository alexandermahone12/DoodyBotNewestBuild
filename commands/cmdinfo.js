module.exports = {

    name: 'help',
    description: "Info about certain command",
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if (!args.length){
                return message.channel.send("The help command shows you info about a certain command, type the command name as an argument. If you dont know what the doodybotcommands are, use !help list.")
            }else if(args[0] === 'list'){
                var Myarray = [
                    "`avatar`",
                    "`botinvite`",
                    "`report`",
                    "`status`",
                    "`suggest`",
                    "`ytg`",
                    "`meme`",
                    "`bankaccount`",
                    "`balance`",
                    "`deposit`",
                    "`withdraw`"
                ];
                const commandsEmbed1 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("List of commands")
                .setDescription(Myarray)
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed1);
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
            }else if(args[0] === 'meme'){
                const commandsEmbed16 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("meme command info")
                .setDescription("Sends a random meme from reddit")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed16);
            }else if(args[0] === 'bankaccount'){
                const commandsEmbed17 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("bankaccount command info")
                .setDescription("Creates a bank account in the bank system")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed17);
            }else if(args[0] === 'deposit'){
                const commandsEmbed18 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("deposit command info")
                .setDescription("Deposits the wanted amount of coins from the bank to the wallet. Example: !deposit 10000")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed18);
            }else if(args[0] === 'withdraw'){
                const commandsEmbed19 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("withdraw command info")
                .setDescription("Withdraws the wanted amount of coins from the wallet to the bank. Example: !withdraw 10000")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed19);
            }else if(args[0] === 'balance'){
                const commandsEmbed20 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("balance command info")
                .setDescription("Checks the avalible amount of coins in the wallet & the bank")
                .setFooter("DoodyBot version 2", "https://i.postimg.cc/zftSmvqt/shadow.png");
                message.channel.send(commandsEmbed20);
            }
        }
    }
 
}