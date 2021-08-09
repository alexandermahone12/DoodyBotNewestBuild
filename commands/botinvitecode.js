module.exports = {

    name: 'botinvite',
    description: "creates an invite for the bot",
    execute(message, args, cmd, client, Discord) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setTitle('Add DoodyBot to your server!')
        .setDescription('[Click here!](https://discord.com/oauth2/authorize?client_id=858809681518002187&scope=bot&permissions=8589934591)')
        .addFields({ name: "Important", value: "When adding doodybot, it will ask you to authorize some permissions. You do not have to tick all the boxes.", inline: true })
        .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);

    }
 
}