module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if(message.channel.id === "875059824457560154"){
        if(message.member.roles.cache.has('874736823488901180')){
            message.reply("You are already verified! Please don't spam this command.")
        }else{
            message.member.roles.remove('875704950804578304');
            message.member.roles.add('874736823488901180');
            message.reply('Youve been verified!')
        }
    }else{
        message.reply("You can only use this command in Doody's server / verify channel.")
    }
        

    }
}