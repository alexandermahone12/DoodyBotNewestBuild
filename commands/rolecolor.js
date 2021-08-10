module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {
            const multilineString = `
            <:redcolor:874703436241838202> <@&872060134833147906>

            <:greencolor:874703023031586836> <@&874681708765651024>

            <:purplecolor:874702566959775814> <@&874671480162635837>

            <:pinkcolor:874702329767678063> <@&874682308421111848>
            `;
            if (args[0] === 'init'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTitle("List of colors")
                .setDescription(multilineString)
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png')
                message.channel.send(commandsEmbed);
    
    
            }else if(args[0] === 'red'){
                let role = message.guild.roles.find(r => r.name === "redcolor")
                if(!role){
                    return message.channel.send('Error: Red role not found, to fix this problem create a role name redcolor .')
                }
                member.roles.add(role)
            }

        }
    }
