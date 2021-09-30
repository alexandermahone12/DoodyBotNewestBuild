module.exports = {
    name: "info",
    description: "Send info about realm",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        if (!message.member.permissions.has("ADMINISTRATOR")) return;
        const embed0 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setImage('https://i.postimg.cc/0ydy2Y1D/Info-banner.jpg')

        const info = `
        Are you looking for a discord community to call Home? Well, you've come to the right spot!

        • A bunch of channels to meet new friends and have fun!
        • Discuss & chat about anything you'd like!
        • Movie nights, debates, etc!
        • Partnering!
        • Giveaways!
        • Custom bot & fun banking system
        • Safe for work!
        • Wholesome community!
        • Level-reward-system!
        • Lovely & Active members!
        `
        const embed = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("**Information about 𝐑𝐞𝐚𝐥𝐦...**")
        .setDescription(info)
        .setFooter("Below you can find all the necessary information about Realm.")

        const embed2 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`📈` **Leveling System!**")
        .setDescription("We in Realm feel compelled to recognize the most active members that bring light to this server. As a result, we've implemented a leveling system in which the more messages you send, the more experience you get. You level up when your experience total reaches a specific number. Unfortunately, we do not have a plugin to monitor your xp bar, however we do have a 〖🆙〗level-up channel that notifies you when you have leveled up.")
        
        const embed3 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`✨` **Self Roles!**")
        .setDescription("Members can self assign any of the available roles in the <#876685781077479454> channel")

        const embed4 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`🪙` **Economy System!**")
        .setDescription("In Realm we offer an economy system, where you can earn coins by completing simple tasks using the !task command, you can use your coins to buy roles, private channels, etc in the Realm shop!")
        .setFooter("For more information fo to the Banking-system channel")

        const embed5 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`🎭` **Events!**")
        .setDescription("In Realm, We will be hosting events on Sunday and Wednesday every single week at 3PM (GMT).")

        const embed6 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`🤝` **Partnerships!**")
        .setDescription("To expand our community, we partner with other servers. All partnerships are logged in <#875364282613772368>.")
        .setFooter("To partner with Realm please contact one of the server admins")

        const embed7 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`🎉` **Giveaways!**")
        .setDescription('We will be hosting giveaways which will all be sent in <#875365554033152020>, the giveaways include gift cards, discord nitro, etc')
        const guide = `
        • <#874735254609489934> The main chat

        • <#891379674784096256> Channel to use all the bot commands in

        • <#892134251607244881> General text channel for all events
        `
        const embed8 = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle("`⭐` **Basic Channel Guide!**")
        .setDescription(guide)
        .setFooter("Every channel includes a description that explains the purpose it was made for")


        message.channel.send(embed0)
        message.channel.send(embed)
        message.channel.send(embed2)
        message.channel.send(embed3)
        message.channel.send(embed4)
        message.channel.send(embed5)
        message.channel.send(embed6)
        message.channel.send(embed7)
        message.channel.send(embed8)




    }
}