const os = require('os');
module.exports = {
    name: 'specs',
    description: 'None',
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (os.type !== 'Window_NT'){
            const commandsEmbed2 = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("Error:")
            .setDescription("You can't use this command on mobile devices/macbooks")
            .setFooter("This command will support MACOS devices soon!")
            message.channel.send(commandsEmbed2)
            return;
        }
        const CPU = os.cpus()
        const NETWORK = os.networkInterfaces()
        const PLATFORM = os.platform()
        const PLATFORMARCH = os.arch()
        var bytesAvailable = os.totalmem()
        const MEMORY = "Total memory available MB :" + (bytesAvailable/1048576)
        const embed = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle(`${message.author.name}'s PC specs`)
        .addFields(
            { name: 'CPU:', value: `${CPU}`, inline: true},
            { name: "Network:", value: `${NETWORK}`, inline: true},
            { name: "Platform:", value: `${PLATFORM}`, inline: true},
            { name: "Arch:", value: `${PLATFORMARCH}`, inline: true},
            { name: "Memory:", value: `${MEMORY}`, inline: true}

        )
        .setThumbnail('http://logok.org/wp-content/uploads/2014/12/Windows-logo-2012-880x654.png')
        .setTimestamp()
        message.channel.send(embed)



    }
}