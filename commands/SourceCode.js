module.exports = {

    name: 'sourcecode',
    aliases: ['codelink', 'howwasthisshitmade'],
    description: "Sends the link for the source",
    execute(message, args, cmd, client, Discord) {

        message.channel.send("Here is the Github link for the DoodyBot source code. Note: this is not the latest version of the source code. The bot is still in development.")
        message.channel.send("https://github.com/alexandermahone12/DoodyBotSourceCode.git");

    }
 
}