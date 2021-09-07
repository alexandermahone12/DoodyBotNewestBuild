const TikTokScraper = require('tiktok-scraper')
module.exports = {
    name: 'tiktok',
    description: 'searches for a tiktok account and returns the corresponding  information',
    cooldown: 5,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        try 
        {
            const user = await TikTokScraper.getUserProfileInfo(args[0]);
            const userbe = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            if(user.user.verified == true){
                userbe.setTitle(`User Info - @${user.user.uniqueId} <:Ver:750173291075076197>`)
            }
            else{
                userbe.setTitle(`User Info - @${user.user.uniqueId}`)
            }
            userbe.setURL(`https://www.tiktok.com/@${user.user.uniqueId}`)
            .setThumbnail(user.user.avatarThumb)
            .addField("Username", `${user.user.uniqueId}`, true)
            .addField("Nickname", `${user.user.nickname}`, true)
            if(user.user.signature == ''){
                userbe.addField("Bio", `No bio yet.`)
            }
            else{
                userbe.addField("Bio", `${user.user.signature}`)
            }
            userbe.addField("Followers", number.formatNumber(`${user.stats.followerCount}`),true)
            .addField("Following", number.formatNumber(`${user.stats.followingCount}`),true)
            .addField("Hearts", number.formatNumber(`${user.stats.heartCount}`),true)
            message.channel.send({embed: userbe })
        } 
        catch (error) 
        {
            const embederr = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle(`Error`)
            .addField("An error has occured", "The tiktok command is under development")
            message.channel.send({embed: embederr })
        }
    
    }
}