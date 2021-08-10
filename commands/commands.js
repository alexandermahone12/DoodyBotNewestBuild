module.exports = {

    name: 'commands',
    description: "Shows a list of the available commands!",
    execute(message, args, cmd, client, Discord) {
        console.log("Working");
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#554846')
        .setTitle('Commands list')
        .setURL('https://doodybot2021.wixsite.com/doodybot')
        .setDescription("these are the DoodyBot commands")
        .addFields(
            {name: "Command 1:", value: "/clear: Clears 1-100 messages (only admin roles can use this)"},
            {name: "Command 2:", value: "/hi: Says hi"},
            {name: "Command 3:", value: "/commands: Shows the list of commands that you can use"},
            {name: "Command 4:", value: "/play: plays a song into the vc"},
            {name: "Command 5:", value: "/skip: skips the current queued song"},
            {name: "Command 6:", value: "/stop: stops the song and kicks DoodyBot out of the vc"},
            {name: "Command 7:", value: "/mute: mutes the person you @ after the message(only for admin)"},
            {name: "Command 8:", value: "/unmute: unmutes the person you @after the message(only for admin)"},
            {name: "Command 9:", value: "/suggest:Creates a suggestion in the suggestions channel!"},
            {name: "Command 10:", value: "/botinvite: Creates an invite for the bot!"},
            {name: "Command 11:", value: "/avatar: Shows the avatar/profile pic of the person @ after the command!"},
            {name: "Command 12:", value: "/ytg: Starts a youtube together activity!"},
            {name: "PREFIX IS [/]", value: "/"},
            
        )
        .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);
    }   
    
}