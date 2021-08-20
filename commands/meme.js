const memes = require("random-memes");
module.exports = {
    name: "meme",
    description: "Generates a random meme",
    execute(message, args, cmd, client, Discord, profiledata){
        memes.random().then(meme => {
            const memeimage = meme.image
            //returns image link
            const memecategory = meme.category
            //returns category
            const memecaption = meme.caption
            const commandsEmbed1 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle('Meme generated')
                .setImage(memeimage)
                .setFooter(`caption: ${memecaption}, category: ${memecategory}`)
            message.channel.send(commandsEmbed1);
            //returns image caption
            })
    }
}