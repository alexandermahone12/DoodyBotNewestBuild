module.exports = {

    name: 'verify',
    description: "None",
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {

        const channel = '891393063249932329';
        const emoji = '✅';
        let embed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Verify!')
            .setDescription("React to the embed to get access to rest of the server!")
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emoji) {
                    if (message.member.roles.cache.find(r => r.id === "875704950804578304")) return message.author.send("You are already verified")
                    await reaction.message.guild.members.cache.get(user.id).roles.remove('875704950804578304');
                    await reaction.message.guild.members.cache.get(user.id).roles.add('874736823488901180');
                }
            }})

    }
}