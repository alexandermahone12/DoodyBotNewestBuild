
module.exports = {
    name: "buy",
    description: "Buys something from the store using coins",
    cooldown: 10,
    async execute(message, args, cmd, client, Discord, profiledata){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            const multilineString = `
            React to an emoji to buy the wanted item


            
            `
            const item1 = '';
            var item1price = 100000;
            const item2 = '';
            var item2price = 100000;

            const channel = '878119198558134292';
            let embed = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle('Coins shop!')
                .setDescription(multilineString)
                .setFooter('To suggest a new item use !suggest');
            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(item1);
            messageEmbed.react(item2);
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
     
                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === item1) {
                        await reaction.message.author.send('1')
                    }
                    if (reaction.emoji.name === item2) {
                        await reaction.message.author.send('1')
                    }
                  
                } else {
                    return;
                }
     
            });
        }   
    }

}