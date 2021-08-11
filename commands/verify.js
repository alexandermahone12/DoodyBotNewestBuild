module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {

        var Channel = message.channel.name
        if(Channel != "𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣-𝙘𝙝𝙖𝙣𝙣𝙚𝙡") {
            return message.reply('You cannot use this command here');
        } else {
            var role = message.member.roles.cache.find(role => role.name === "verified");
            message.member.guild.roles.add(role);
            message.reply('Youve been verified!')
        }

        
    }
}