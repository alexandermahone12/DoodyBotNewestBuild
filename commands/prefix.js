const fs = require('fs')
module.exports = {

    name: 'prefix',
    description: "creates an invite for the bot",
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.member.permissions.has("ADMINISTRATOR")){
                if(!args.length) return message.channel.send("what would you like to change the prefix to?")
                let prefixes = JSON.parse(fs.readFileSync('././prefixes.json', "utf-8"));
                prefixes[message.guild.id] = {
                    prefixes: args[0]
                };
                fs.writeFile("././prefixes.json", JSON.stringify(prefixes),(err) => {
                    if (err) console.log(err)
                });

                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle(`Prefix changed to ${args[0]}`)
                .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed);
    }else{
        message.channel.send("you dont have the required permissions to change the prefix")
    } }
    }
 
}