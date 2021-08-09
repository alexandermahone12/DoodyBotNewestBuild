const fetch = require('node-fetch')
module.exports = {

    name: 'ytg',
    description: "creates an invite",
    async execute(message, args, cmd, client, Discord) {

        let channel = message.member.voice.channel;
        if(!channel) return message.channel.send("You have to be in a voice channel to use this command!")
        
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
        
        .then(res => res.json())
        .then(invite => {
            if(!invite.code) return message.channel.send("error while starting a youtube together.")
            const e = new Discord.MessageEmbed()
            .setDescription(`[Click me to start youtube together!](https://discord.com/invite/${invite.code})`)
            .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
            message.channel.send(e)
        })
        }
        
    }


