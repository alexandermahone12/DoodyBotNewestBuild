const profileModel = require('../models/profileSchema')

module.exports = {
    name: "shop",
    description: "Buys something from the store using coins",
    cooldown: 15,
    async execute(message, args, cmd, client, Discord, profiledata){
        const selltimes = 3
        var StickersPermsPrice = 1000000;
        var EmojiPermsEmojiPrice = 1000000;
        if (!args.length){
            const commandsEmbed2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("shop commands list")
            .setDescription('buy: buys something from the store. Example: !shop buy stickersperms \n updateme: updates you everytime there is a new item added to the shop \n sell: sells an item youve already bought. Example: !shop sell stickersperms')
            .setFooter('If you want other items to be added use !suggest (suggestion)')
            message.channel.send(commandsEmbed2)
        }
        if (args[0] ==='buy'){
            if (args[1] === 'stickersperms'){
                if (profiledata.coins >= StickersPermsPrice){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: target.id,
                        },
                        {
                        $inc: {
                            coins: -StickersPermsPrice,
                        },
                        }
                    );
                    const StickersPermsRole = message.guild.roles.cache.find(role => role.name === "StickersPerms")
                    message.guild.members.cache.get(message.author.id).roles.add(StickersPermsRole);
                    const commandsEmbed3 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully purchased the StickersPerms role.")
                    .setDescription("Thank you for purchasing the StickersPerms role. If you bought this by accident, just use the !shop sell StickersPerms command to refund it!. Note: For can only refund an item 3times so use it wisely!")
                    message.author.send(commandsEmbed3)
                    return
                }else{
                    const commandsEmbed4= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to purchase the StickersPerms role")
                    .setDescription("You don't have enough coins in your wallet!")
                    message.author.send(commandsEmbed4)
                }
            }else if(args[1] === 'EmojiPerms'){
                if (profiledata.coins >= StickersPermsPrice){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: target.id,
                        },
                        {
                        $inc: {
                            coins: -EmojiPermsEmojiPrice,
                        },
                        }
                    );
                    const StickersPermsRole = message.guild.roles.cache.find(role => role.name === "EmojiPerms")
                    message.guild.members.cache.get(message.author.id).roles.add(StickersPermsRole);
                    const commandsEmbed6 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully purchased the EmojiPerms role.")
                    .setDescription("Thank you for purchasing the EmojiPerms role. If you bought this by accident, just use the !shop sell EmojiPerms command to refund it!. Note: For can only refund an item 3times so use it wisely!")
                    message.author.send(commandsEmbed6)
                    return
                }else{
                    const commandsEmbed5= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to purchase the EmojiPerms role")
                    .setDescription("You don't have enough coins in your wallet!")
                    message.author.send(commandsEmbed5)
                }
            }
        }
        if (args[0] === 'init'){
            if (message.member.id != "462014203834662913") return message.channel.send(`Sorry only **Doody** can run this command 😔`);
            const multilineString = `
            React to an emoji to buy the wanted item

            🖼️<@&878667764716408842> Price: ${StickersPermsPrice} Coins

            🤑<@&878667541042569227> Price: ${EmojiPermsEmojiPrice} Coins

            `
            const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("Realm's shop!")
            .setDescription(multilineString)
            message.channel.send(commandsEmbed1)

        }
    }
}