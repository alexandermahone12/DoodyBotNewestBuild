module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {
            const multilineString = `
            <:redcolor:874703436241838202> Red color

            <:greencolor:874703023031586836> Green color

            <:purplecolor:874702566959775814> Purple color

            <:pinkcolor:874702329767678063> Pink color
            `;
            if (args[0] === 'init'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTitle("List of colors")
                .setDescription(multilineString)
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png')
                message.channel.send(commandsEmbed);
    
    
            }else if(args[0] === 'red'){
                let role = message.guild.roles.cache.find(r => r.name === "redcolor")
                if(!role){
                    return message.channel.send('Error: Red role not found, to fix this problem create a role name redcolor .')
                }
                message.member.roles.add(role)
            }else if(args[0] === 'green'){
                let role = message.guild.roles.cache.find(r => r.name === "greencolor")
                if(!role){
                    return message.channel.send('Error: green role not found, to fix this problem create a role name greencolor .')
                }
                message.member.roles.add(role)

            }else if(args[0] === 'purple'){
                let role = message.guild.roles.cache.find(r => r.name === "purplecolor")
                if(!role){
                    return message.channel.send('Error: Purple role not found, to fix this problem create a role name purplecolor .')
                }
                message.member.roles.add(role)   
            }
    }
}
