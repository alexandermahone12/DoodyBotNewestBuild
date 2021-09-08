const { MessageButton } = require("discord-buttons")
module.exports = {
    name: 'watch',
    description: "Sends a link for the wanted show",
    cooldown: 10,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        if(!args.length){
            const embed = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle('Watch command')
            .setDescription('This command sends you info of wanted shows on netflix')
            .setFooter('Use `!watch list` to get the list of shows available')
            message.channel.send(embed)
            return;
        }
        if (args[0] === 'MrRobot' || 'mrrobot'){
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle('Netflix -- `MrRobot 2015-2019`')
            .addFields(
                { name:"Description", value:"`Elliot, a cyber-security engineer suffering from anxiety, works for a corporation and hacks felons by night. Panic strikes him after Mr Robot, a cryptic anarchist, recruits him to ruin his company.`", inline: true },
                { name:"Where to watch", value:"`Netflix` \n `Amazon prime` \n `weirdo sites (123movies.com)` ", inline: true},
                { name:"Statistics", value:"`IMDb rating: 8.9/10 (350K)` \n `rottentomatoes rating: Liked by 94%`", inline: true},
                { name:"Cast", value:"`" + `[click here](https://www.imdb.com/title/tt4158110/)` + "`", inline: true},
            )
            .setFooter('Use `!watch list` to get the list of shows available')
            .setThumbnail('https://www.filmandtvnow.com/wp-content/uploads/2016/07/mrrobot-banner.jpg')
            const mrrobot_button = new MessageButton()
                .setStyle("url")
                .setLabel("Watch here")
                .setURL('https://www.netflix.com/browse?jbv=80045933')
            message.channel.send(embed2, mrrobot_button);
        }
    }
}