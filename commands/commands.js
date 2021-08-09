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
            {name: "Command one:", value: "/clear: Clears 1-100 messages (only certain roles can use this)"},
            {name: "Command two:", value: "/invite: Creates and sends an invite link to the chat"},
            {name: "Command three:", value: "/hi: Says hi"},
            {name: "Command four:", value: "/commands: Shows the list of commands that you can use"},
            {name: "Command five:", value: "/play: plays a song into the vc"},
            {name: "Command six:", value: "/skip: skips the current queued song"},
            {name: "Command seven:", value: "/stop: stops the song and kicks DoodyBot out of the vc"},
            {name: "Command eight:", value: "/mute: mutes the person you @ after the message(only for admin)!!!!YOU NEED TO CREATE A member AND Muted ROLE BEFORE USING THIS COMMAND!!!!"},
            {name: "Command nine:", value: "/unmute: unmutes the person you @after the message(only for admin)!!!!YOU NEED TO CREATE A member AND Muted ROLE BEFORE USING THIS COMMAND!!!!"},
            {name: "Command ten:", value: "/suggest:Creates a suggestion in the suggestions channel!"},
            {name: "Command eleven:", value: "/botinvite: Creates an invite for the bot!"},
            {name: "Command twelve:", value: "/avatar: Shows the avatar/profile pic of the person @ed after the command!"},
            {name: "Command thirteen:", value: "/ytg: Starts a youtube together activity!"},
            {name: "Command fourteen:", value: "/sourcecode: Sends a Github link that has the DoodyBot source code (JavaScript)"},
            {name: "PREFIX IS [/]", value: "/"},
            
        )
        .setImage('https://i.postimg.cc/zftSmvqt/shadow.png')
        .setFooter('Thank you for using DoodyBot ;)')
        .setFooter('!!!This Bot is still in the development phase!!!');
        message.channel.send(commandsEmbed);
    }   
    
}