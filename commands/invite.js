module.exports = {

    name: 'invite',
    aliases: ['link', 'invite_link'],
    description: "creates an invite",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('https://discord.gg/Hx2G4sHnrp');
        message.channel.send('Note: invite is valid for only one use.')

    }
 
}