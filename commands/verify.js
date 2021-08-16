const fs = require('fs') 
module.exports = {

    name: 'verify',
    description: "None",
    execute(message, args, cmd, client, Discord) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.channel.id === "875059824457560154"){
            if(message.member.roles.cache.has('874736823488901180')){
                message.reply("You are already verified! Please don't spam this command.")
            }else{
                message.member.roles.remove('875704950804578304');
                message.member.roles.add('874736823488901180');
                const replytouser = message.reply('Youve been verified!')
  
                // Data which will write in a file. 
                let data = `${replytouser}`
                
                // Write data in 'Output.txt' . 
                fs.writeFile('C:\Users\ale48\Desktop\Programming\Javascript\SERVER\DoodyBotNewestBuild\assets\verifyLOG.txt', data, (err) => { 
                    
                    // In case of a error throw err. 
                    if (err) throw err; 
                }) 
            }
        }else{
            message.reply("You can only use this command in Doody's server / verify channel.")
        }
            

    }}
}