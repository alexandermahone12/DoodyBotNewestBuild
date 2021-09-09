const translate = require('translate-google');
module.exports = {
    name: 'translate',
    description: 'NULL',
    cooldown: 3,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        translate(args.join(" "), {to : 'en'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle("Translate to english")
            .setDescription(`Translated: ${res}`)
            message.channel.send(embed)
        }).catch(err => {
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("Error")
            .setDescription(`Error: ${err}`)
            message.channel.send(embed2)
            console.log(err)
        })
    }
}