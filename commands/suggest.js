module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, Discord){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            const channel = message.guild.channels.cache.find(c => c.id === '875404469360295947');
            if(!channel) return message.channel.send('This command can only be used in the public server.');

            let messageArgs = args.join(' ');
            const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

            channel.send(embed).then((msg) =>{
                msg.react('👍');
                msg.react('👎');
                message.delete();
            }).catch((err)=>{
                throw err;
            });
    }}
}