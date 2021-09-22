
module.exports = {

    name: 'selfroles',
    description: "says hi",
    cooldown: 30,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
      if (message.channel instanceof Discord.DMChannel){
        return message.channel.send("You cannot use this command in DMs")
    }else{
        const multilineString = `
        React to an emoji to get the wanted role!

        🎤<@&889923507134296145>

        ♂️ <@&876688146576867398>

        ♀️ <@&876688254257233952>

        🎨<@&876690301828341760>

        🖥️<@&876690398062452737>

        🎮<@&876870785116037171>

        🏅<@&876871980253577307>

        📱<@&876872978795741184>

        📚<@&876873782978048083>

        📷<@&876887540295151617>

        🎸<@&877482780093743135>

        👶<@&877486269628825610>

        🧒<@&877486363522502696>

        👴<@&877486423450742805>
        
        `
        const channel = '876685781077479454';
        const malerole = message.guild.roles.cache.find(role => role.name === "Male");
        const femalerole = message.guild.roles.cache.find(role => role.name === "Female");
        const artistrole = message.guild.roles.cache.find(role => role.name === "Artist");
        const programmerrole = message.guild.roles.cache.find(role => role.name === "Programmer");
        const gamerrole = message.guild.roles.cache.find(role => role.name === "Gamer");
        const athleterole = message.guild.roles.cache.find(role => role.name === "Athlete");
        const influencerrole = message.guild.roles.cache.find(role => role.name === "Influencer");
        const bookwormrole = message.guild.roles.cache.find(role => role.name === "Bookworm");
        const youtuberrole = message.guild.roles.cache.find(role => role.name === "Youtuber");
        const musicianrole = message.guild.roles.cache.find(role => role.name === "Musician");
        const babyrole = message.guild.roles.cache.find(role => role.name === "13-14");
        const midbabyrole = message.guild.roles.cache.find(role => role.name === "15-16");
        const oneeightrole = message.guild.roles.cache.find(role => role.name === "18+");
        const eventsrole = message.guild.roles.cache.find(role => role.name === "events");



        const maleroleEmoji = '♂️';
        const femaleroleEmoji = '♀️';
        const artistroleEmoji = '🎨';
        const programmerroleEmoji = '🖥️';
        const gamerroleEmoji = '🎮';
        const athleteroleEmoji = '🏅';
        const influencerroleEmoji = '📱';
        const bookwormroleEmoji = '📚';
        const youtuberroleEmoji = '📷';
        const musicianroleEmoji = '🎸';
        const babyroleEmoji = '👶';
        const midbabyroleEmoji = '🧒';
        const oneeightroleEmoji = '👴';
        const eventsroleemoji = '🎤';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle('Self roles!')
            .setDescription(multilineString)
            .setFooter('If you would like a new role to be added please contact me or ego!');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(eventsroleemoji);
        messageEmbed.react(maleroleEmoji);
        messageEmbed.react(femaleroleEmoji);
        messageEmbed.react(artistroleEmoji);
        messageEmbed.react(programmerroleEmoji);
        messageEmbed.react(gamerroleEmoji);
        messageEmbed.react(athleteroleEmoji);
        messageEmbed.react(influencerroleEmoji);
        messageEmbed.react(bookwormroleEmoji);
        messageEmbed.react(youtuberroleEmoji);
        messageEmbed.react(musicianroleEmoji);
        messageEmbed.react(babyroleEmoji);
        messageEmbed.react(midbabyroleEmoji);
        messageEmbed.react(oneeightroleEmoji);
        
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === eventsroleemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventsrole);
                }
                if (reaction.emoji.name === maleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(malerole);
                }
                if (reaction.emoji.name === femaleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(femalerole);
                }
                if (reaction.emoji.name === artistroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(artistrole);
                }
                if (reaction.emoji.name === programmerroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(programmerrole);
                }
                if (reaction.emoji.name === gamerroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gamerrole);
                }
                if (reaction.emoji.name === athleteroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(athleterole);
                }
                if (reaction.emoji.name === influencerroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(influencerrole);
                }
                if (reaction.emoji.name === bookwormroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bookwormrole);
                }
                if (reaction.emoji.name === youtuberroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youtuberrole);
                }
                if (reaction.emoji.name === musicianroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(musicianrole);
                }
                if (reaction.emoji.name === babyroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(babyrole);
                }
                if (reaction.emoji.name === midbabyroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(midbabyrole);
                }
                if (reaction.emoji.name === oneeightroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(oneeightrole);
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
                if (reaction.emoji.name === eventsroleemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventsrole);
                }
                if (reaction.emoji.name === maleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(malerole);
                }
                if (reaction.emoji.name === femaleroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(femalerole);
                }
                if (reaction.emoji.name === artistroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(artistrole);
                }
                if (reaction.emoji.name === programmerroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(programmerrole);
                }
                if (reaction.emoji.name === gamerroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gamerrole);
                }
                if (reaction.emoji.name === athleteroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(athleterole);
                }
                if (reaction.emoji.name === influencerroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(influencerrole);
                }
                if (reaction.emoji.name === bookwormroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bookwormrole);
                }
                if (reaction.emoji.name === youtuberroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(youtuberrole);
                }
                if (reaction.emoji.name === musicianroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(musicianrole);
                }
                if (reaction.emoji.name === babyroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(babyrole);
                }
                if (reaction.emoji.name === midbabyroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(midbabyrole);
                }
                if (reaction.emoji.name === oneeightroleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(oneeightrole);
                }
            } else {
                return;
            }
        });
        }
    }    
}