module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if(message.member.roles.cache.has('874736823488901180')){
            message.reply("You are already verified! Please don't spam this command.")
        }else{
            message.member.roles.add('874736823488901180');
            message.reply('Youve been verified!')
        }

        
    }
}