module.exports = {

    name: 'clear',
    description: "Clear messages!",
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.member.permissions.has("ADMINISTRATOR")){
                if(!args[0]) return message.reply("Please enter the amount of messages that you want to delete after the [clear] command!");
                if(isNaN(args[0])) return message.reply("Please enter a number!");
        
                if(args[0] > 100) return message.reply("You cannot clear more than a hundred messages!");
                if(args[0] < 1) return message.reply("You have to delete at least one message!");
        
                await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                    message.channel.bulkDelete(messages);
                    const embed1 = new Discord.MessageEmbed()
                    .setColor(commonjson.defaultcolor)
                    .setTitle(`I cleared ${args[0]} messages!`)
                    message.channel.send(`I cleared ${args} messages!`);
                })
            }else {
                message.channel.send("You can't send this command because you do not have the required presmisssions!")
            }
    
        }
    }
        }
