
module.exports = {

    name: 'autoroles',
    description: "says hi",
    async execute(message, args, cmd, client, Discord) {
      if (message.channel instanceof Discord.DMChannel){
        return message.channel.send("You cannot use this command in DMs")
    }else{
        const channel = '876685781077479454';
        const malerole = message.guild.roles.cache.find(role => role.name === "male");
        const femalerole = message.guild.roles.cache.find(role => role.name === "female");
        const artistrole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
        const programmerrole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");

 
        const maleroleEmoji = '♂️';
        const femaleroleEmoji = '♀️';
        const artistroleEmoji = '🎨';
        const programmerroleEmoji = '🖥️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Auto roles')
            .setDescription('React to a reaction to get the wanted role!');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(maleroleEmoji);
        messageEmbed.react(femaleroleEmoji);
        messageEmbed.react(artistroleEmoji);
        messageEmbed.react(programmerroleEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === maleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(malerole);
                }
                if (reaction.emoji.name === femaleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(femalerole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === maleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(malerole);
                }
                if (reaction.emoji.name === femaleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(femalerole);
                }
            } else {
                return;
            }
        });
        }
    }    
}