module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {

        var role = message.member.roles.cache.find(role => role.name === "verified");
        if (!role) return;
        message.member.roles.add(role);
        message.reply('Youve been verified!')
        
    }
}