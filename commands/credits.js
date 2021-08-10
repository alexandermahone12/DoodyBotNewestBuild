module.exports = {

    name: 'credits',
    description: "says hi",
    execute(message, args, cmd, client, Discord) {

        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setDescription('Bot made by Doody using [javascript](https://www.javascript.com/), [python](https://www.python.org/), [ytdl-core](https://www.npmjs.com/package/ytdl-core) and the discord API module. <@874682308421111848>')
        .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);

    }

    }
 
