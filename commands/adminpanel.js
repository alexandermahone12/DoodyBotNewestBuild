module.exports = {
    name: 'admin',
    description: "admin panel",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            if (!args.length){
                return message.channel.send('Admin command. please enter argument after command!');
            }else if(args[0] === 'panel'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('#0000')
                .setTitle('admin panel')
                .addFields(
                    {name: "/admin panel", value: "shows the admin panel"},
                    {name: "/admin textchannel", value: "creates a text channel"},
                    {name: "/admin voicechannel", value: "creates a voice channel"},
                )
                message.channel.send(commandsEmbed);
            }else if(args[0] === 'textchannel') {
                let name = message.author.username;
                message.guild.channels.create(`textchannelBOT-${name}`, { type: 'text' }).then(c => {
                    message.reply('A text channel has been created')
                });
            }else if(args[0] === 'voicechannel') {
                let name = message.author.username;
                message.guild.channels.create(`voicechannelBOT-${name}`, { type: 'voice' }).then(c => {
                    message.reply('A voice channel has been created')
                });
            }else if(args[0] === 'invite'){
                    message.reply('https://discord.gg/RD5Xt29v82')
            }
        }else{
            message.channel.send('THE ADMIN COMMAND CAN ONLY BE USED BY ADMINS.');
        }
    }

}