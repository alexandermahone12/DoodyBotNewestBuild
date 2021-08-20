module.exports = {
    name: "meme",
    description: "Creates account in database",
    execute(message, args, cmd, client, Discord, profiledata){
        const { reddit } = require("reddit.images");
        if (!args.length) return message.channel.send("Use the search bar to search for a specific topic ")
        reddit.FetchRandomMeme(args[0]).then((data) => {
            const commandsEmbed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle(`[${data.title}](${data.postLink})`)
            .setImage(data.image)
            .setFooter(`👍${data.upvotes} || 👎${data.downvotes}`)
            message.channel.send(commandsEmbed1);
            const thumbsup = '👍';
            const thumbsdown = '👎';
            commandsEmbed1.react(thumbsup);
            commandsEmbed1.react(thumbsdown);
        });   
    }
}