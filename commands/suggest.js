module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.id === '875404469360295947');
        if(!channel) return message.channel.send('suggestions channel does not exist!, to solve this create a channel named〖❓〗Suggestions');

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
    }
}