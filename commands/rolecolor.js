module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            if (args[0] === 'list'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#0000')
                .setTitle("List of colors")
                .setDescription('red, purple, green, pink, orange, yellow, blue')
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed);

            }else if(args[0] === 'red'){
                var role = member.guild.roles.cache.find(role => role.name === "Red");
                if (!role){
                    return message.channel.send(`Role ${args} does not exist, to fix this problem create a role named Red`)
                }else{
                    console.log('Role given')
                    message.member.guild.roles.add(role);
                }

            }
        }
    }
}
