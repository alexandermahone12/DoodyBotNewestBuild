module.exports = {
    name: "meme",
    description: "Creates account in database",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, prefix){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            const { reddit } = require("reddit.images");
            reddit.FetchRandomMeme("hot").then((data) => {
                const commandsEmbed1 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setDescription(`**[${data.title}](${data.postLink})**`)
                .setImage(data.image)
                .setFooter(`👍${data.upvotes} || 👎${data.downvotes}  Note: if the meme did not load then its because the meme is a video.`)
                const thumbsup = '👍';
                const thumbsdown = '👎';
                message.channel.send(commandsEmbed1).then(embedMsg => {
                    embedMsg.react(thumbsup)
                    embedMsg.react(thumbsdown)
                }).catch((err)=>{
                    console.log(err)
                })
            });   
    }}
}  