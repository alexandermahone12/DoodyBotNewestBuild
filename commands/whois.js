const moment = require('moment');
const { MessageButton } = require("discord-buttons")
module.exports = {
    name: "whois",
    description: "shows information about the mentioned person",
    cooldown: 5,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson){

        let mention = message.mentions.users.first() || message.author
        let avatar = mention.displayAvatarURL({dynamic : true, size: 1024})

        let roleCount = await mention.member.roles.cache.map(x => "<@&" + x.id + ">").join(" ");
        // Get joined date for member
        let joinDate = await moment(mention.joinedTimestamp).format('MMMM Do YYYY, HH:mm:ss');
        // Get user account create date
        let createDate = await moment(mention.createdAt).format('MMMM Do YYYY, HH:mm:ss');   

        const embed = Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle(`Who is ${mention.displayName}?`)
        .addFields(
            { name: `Their username and tag:`, value: `${mention.displayName}`, inline: true },
            { name: `They created Their account at:`, value: createDate, inline: true },
            { name: `They joined **${message.guild.name}** at:`, value: joinDate, inline: true },
            { name: `Their roles are:`, value: roleCount, inline: true },
        )
        .setImage(avatar)
        const download_button = new MessageButton()
            .setStyle("url")
            .setLabel(`Download ${mention.displayName}'s avatar`)
            .setURL(avatar)
        message.channel.send(embed, download_button);
    }
}