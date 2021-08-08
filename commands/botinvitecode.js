module.exports = {

    name: 'botinvite',
    description: "creates an invite for the bot",
    execute(message, args, cmd, client, Discord) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setTitle('Click here to add DoodyBot to your server!')
        .setLink('https://discord.com/oauth2/authorize?client_id=858809681518002187&scope=bot&permissions=8589934591')
        message.channel.send(commandsEmbed);

    }
 
}