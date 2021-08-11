module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if (message.channel.id === "875059824457560154") {
            var role = message.member.roles.cache.find(role => role.name === "verified");
            message.member.guild.roles.add(role);
            message.reply('Youve been verified!')
        }
    }
}