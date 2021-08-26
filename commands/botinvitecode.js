module.exports = {

    name: 'botinvite',
    description: "creates an invite for the bot",
    execute(message, args, cmd, client, Discord, profiledata, prefix) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#554846')
        .setTitle('Add DoodyBot to your server!')
        .setDescription('[Click here!](https://discord.com/oauth2/authorize?client_id=858809681518002187&scope=bot&permissions=8)')
        .addFields({ name: "Important", value: "DoodyBot was developed specifically for Doody's servers, some of DoodyBot's commands may not work if not set up correctly", inline: true })
        .setFooter('DoodyBot version 2', 'https://i.postimg.cc/zftSmvqt/shadow.png');
        message.channel.send(commandsEmbed);

    }
 
}