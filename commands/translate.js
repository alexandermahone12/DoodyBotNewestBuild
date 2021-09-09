const translate = require('google-translate');
module.exports = {
    name: 'translate',
    description: 'NULL',
    cooldown: 3,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        //EMBED
        const embed = new Discord.MessageEmbed
        .setColor(commonjson.failcolor)
        .setTitle("Error")
        .setDescription("You cant translate nothing idiot.")

        const query = args.join(' ');
        if(!query) return message.channel.send(embed);

        const translate = await translate(query, { to: 'en' });
        const embed2 = new Discord.MessageEmbed
        .setColor(commonjson.defaultcolor)
        .setTitle(`Translate **${query}** to english`)
        .setDescription(`Translation: ${translate}`)
        message.channel.send(embed2);
        
    }
}