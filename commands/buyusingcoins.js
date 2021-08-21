const profileModel = require('../models/profileSchema')

module.exports = {
    name: "shop",
    description: "Buys something from the store using coins",
    cooldown: 15,
    async execute(message, args, cmd, client, Discord, profiledata){
        var StickersPermsPrice = 1000000;
        var EmojiPermsEmojiPrice = 1000000;
        var YoutubeTogetherPrice = 500000;
        if (!args.length){
            const commandsEmbed2 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("shop commands list")
            .setDescription('buy: buys something from the store. Example: !shop buy stickersperms \n updateme: updates you everytime there is a new item added to the shop \n sell: sells an item youve already bought. Example: !shop sell stickersperms')
            .setFooter('If you want other items to be added use !suggest (suggestion)')
            message.channel.send(commandsEmbed2)
        }
        if (args[0] ==='buy'){
            if (args[1] === 'ytg'){
                if (message.member.roles.cache.has('878775928048713738')){
                    const commandsEmbed15345 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while purchasing the Ytg role:")
                    .setDescription("You already purchased the role!")
                    message.author.send(commandsEmbed15345)
                    return
                }
                if (profiledata.coins >= YoutubeTogetherPrice){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: -YoutubeTogetherPrice,
                        },
                        }
                    );
                    const YoutubeTogetherRole = message.guild.roles.cache.find(role => role.name === "YoutubeTogetherRole")
                    message.member.roles.add(YoutubeTogetherRole);
                    const commandsEmbed4325 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully purchased the YoutubeTogether role.")
                    .setDescription("Thank you for purchasing the YoutubeTogether role. If you bought this by accident, just use the !shop sell ytg command to refund it!")
                    message.author.send(commandsEmbed4325)
                    return
                }else{
                    const commandsEmbed43434= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to purchase the YoutubeTogether role")
                    .setDescription("You don't have enough coins in your wallet!")
                    message.author.send(commandsEmbed43434)
                }
            }
            if (args[1] === 'stickersperms'){
                if (message.member.roles.cache.has('878667764716408842')){
                    const commandsEmbed100 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while purchasing the StickersPerms role:")
                    .setDescription("You already purchased the role!")
                    message.author.send(commandsEmbed100)
                    return
                }
                if (profiledata.coins >= StickersPermsPrice){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: -StickersPermsPrice,
                        },
                        }
                    );
                    const StickersPermsRole = message.guild.roles.cache.find(role => role.name === "StickersPerms")
                    message.member.roles.add(StickersPermsRole);
                    const commandsEmbed3 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully purchased the StickersPerms role.")
                    .setDescription("Thank you for purchasing the StickersPerms role. If you bought this by accident, just use the !shop sell StickersPerms command to refund it!")
                    message.author.send(commandsEmbed3)
                    return
                }else{
                    const commandsEmbed4= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to purchase the StickersPerms role")
                    .setDescription("You don't have enough coins in your wallet!")
                    message.author.send(commandsEmbed4)
                }
            }else if(args[1] === 'emojiperms'){
                if (message.member.roles.cache.has('878667541042569227')){
                    const commandsEmbed1020 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while purchasing the EmojiPerms role:")
                    .setDescription("You already purchased the role!")
                    message.author.send(commandsEmbed1020)
                    return
                }
                if (profiledata.coins >= StickersPermsPrice){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: -EmojiPermsEmojiPrice,
                        },
                        }
                    );
                    const EmojiPermsRole = message.guild.roles.cache.find(role => role.name === "EmojiPerms")
                    message.member.roles.add(EmojiPermsRole);
                    const commandsEmbed6 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully purchased the EmojiPerms role.")
                    .setDescription("Thank you for purchasing the EmojiPerms role. If you bought this by accident, just use the !shop sell EmojiPerms command to refund it!.")
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
        if (args[0] === 'sell'){
            if(args[1] === 'ytg'){
                if (message.member.roles.cache.has('878775928048713738')){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: YoutubeTogetherPrice,
                        },
                        }
                    );
                    message.member.roles.remove('878775928048713738');
                    const commandsEmbed104344 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully refunded the YoutubeTogether role.")
                    message.author.send(commandsEmbed104344)
                    return
                }else{
                    const commandsEmbed3444= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to refund the YoutubeTogether role")
                    .setDescription("You did not purchase the YoutubeTogether role!")
                    message.author.send(commandsEmbed3444)
                }
            }
            if(args[1] === 'emojiperms'){
                if (message.member.roles.cache.has('878667541042569227')){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: EmojiPermsEmojiPrice,
                        },
                        }
                    );
                    message.member.roles.remove('878667541042569227');
                    const commandsEmbed10 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully refunded the EmojiPerms role.")
                    message.author.send(commandsEmbed10)
                    return
                }else{
                    const commandsEmbed44= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to refund the EmojiPerms role")
                    .setDescription("You did not purchase the EmojiPerms role!")
                    message.author.send(commandsEmbed44)
                }
            }
            if(args[1] === 'stickersperms'){
                if (message.member.roles.cache.has('878667764716408842')){
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: StickersPermsPrice,
                        },
                        }
                    );
                    message.member.roles.remove('878667764716408842');
                    const commandsEmbed10 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("You've successfully refunded the StickersPerms role.")
                    message.author.send(commandsEmbed10)
                    return
                }else{
                    const commandsEmbed44= new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("Error while attempting to refund the StickersPerms role")
                    .setDescription("You did not purchase the StickersPerms role!")
                    message.author.send(commandsEmbed44)
                }
                }
        }
        if (args[0] === 'init'){
            if (message.member.id != "462014203834662913") return message.channel.send(`Sorry only **Doody** can run this command 😔`);
            const multilineString = `
            Use the correct command to buy the wanted item

            🖼️<@&878667764716408842> Price: ${StickersPermsPrice} Coins, Use !shop buy stickersperms to buy

            🤑<@&878667541042569227> Price: ${EmojiPermsEmojiPrice} Coins, Use !shop buy emojiperms to buy

            📷<@&878775928048713738> Price: ${YoutubeTogetherPrice} Coins, use !shop buy ytg to buy
            `
            const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("Realm's shop!")
            .setDescription(multilineString)
            .setFooter('If you want other items to be added use !suggest (suggestion)')
            message.channel.send(commandsEmbed1)

        }
    }
}