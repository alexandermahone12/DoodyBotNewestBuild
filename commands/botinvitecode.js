module.exports = {

    name: 'botinvite',
    description: "creates an invite for the bot",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=858809681518002187&scope=bot&permissions=8589934591');

    }
 
}