module.exports = {

    name: 'botinvite',
    description: "creates an invite for the bot",
    execute(message, args, cmd, client, Discord) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setTitle('Add DoodyBot to your server!')
        .setDescription('[Click here!](https://discord.com/oauth2/authorize?client_id=858809681518002187&scope=bot&permissions=8589934591)')
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        message.channel.send(commandsEmbed);

    }
 
}