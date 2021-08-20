module.exports = {
    name: "meme",
    description: "Creates account in database",
    execute(message, args, cmd, client, Discord, profiledata){
        const { reddit } = require("reddit.images");

        reddit.FetchRandomMeme("hot").then((data) => {
            const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("Meme generated")
            .setImage(data.thumbnail)
            .setFooter(data.title)
            message.channel.send(commandsEmbed1);
        });   
    }
}