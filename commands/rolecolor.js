module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {

            if (args[0] === 'list'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#0000')
                .setTitle("List of colors")
                .setDescription('red, purple, green, pink, orange, yellow, blue')
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed);

            }else if(args[0] === 'red'){
                var role = message.member.guild.roles.cache.find(role => role.name === "redcolor");
                if(!role){
                    return message.channel.send("This command failed because a 'redcolor' role wasn't created")
                }else{
                    console.log('Role given')
                    message.member.roles.add(role);
                    message.channel.send('Youve been given the role red!');
                }

            }else if(args[0] === 'purple'){
                var role = message.member.guild.roles.cache.find(role => role.name === "purplecolor");
                if(!role){
                    return message.channel.send("This command failed because a 'purplecolor' role wasn't created")
                }else{
                    console.log('Role given')
                    message.member.roles.add(role);
                    message.channel.send('Youve been given the role purple!');
                }
            }
        }
    }
