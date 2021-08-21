const profileModel = require('../models/profileSchema')

module.exports = {
    name: "buy",
    description: "Buys something from the store using coins",
    cooldown: 10,
    async execute(message, args, cmd, client, Discord, profiledata){
        var StickersPermsPrice = 1000000;
        var EmojiPermsEmojiPrice = 1000000;
        const multilineString = `
        React to an emoji to buy the wanted item

        🖼️<@&878667764716408842> Price: ${StickersPermsPrice} Coins

        🤑<@&878667541042569227> Price: ${EmojiPermsEmojiPrice} Coins

        `
        const StickersPermsEmoji = '🖼️';
        const EmojiPermsEmoji = '🤑';


        const channel = '878119198558134292';
        let embed = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("Realm's shop!")
            .setDescription(multilineString)
            .setFooter('To suggest a new item use !suggest');
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(StickersPermsEmoji);
        messageEmbed.react(EmojiPermsEmoji);
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
     
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === StickersPermsEmoji) {
                    if(StickersPermsPrice < '2'){
                        const response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            }, 
                            {
                                $inc: {
                                    coins: -StickersPermsPrice,
                                },
                            }
                        );
                        const StickersPermsRole = message.guild.roles.cache.find(role => role.name === "StickersPerms");
                        let embed2 = new Discord.MessageEmbed()
                            .setColor('#554846')
                            .setTitle("You've been given the StickerPerms role!")
                            .setDescription("Thank you for purchasing the StickerPermsRole from the Realm shop!")
                        await reaction.message.guild.members.cache.get(user.id).roles.add(StickersPermsRole);
                        return
                            

                    }else if (StickersPermsPrice > profiledata.coins){
                        let embed3 = new Discord.MessageEmbed()
                            .setColor('#554846')
                            .setTitle("Error while purchasing the StickerPermsRole:")
                            .setDescription("Not enough coins in wallet.")
                        return message.author.send(embed3)
                    }
                }
                if (reaction.emoji.name === EmojiPermsEmoji) {
                    await reaction.message.author.send('1')
                }
                  
            } else {
                return;
            }
     
            });
    }

}