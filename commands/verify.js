module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {

        message.member.roles.add('874736823488901180');
        message.reply('Youve been verified!')
        
    }
}