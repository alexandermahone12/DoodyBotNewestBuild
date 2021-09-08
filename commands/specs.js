const os = require('os');
module.exports = {
    name: 'specs',
    description: 'None',
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        //*//if (os.type !== 'Window_NT'){
            //*//const commandsEmbed2 = new Discord.MessageEmbed()
            //*//.setColor(commonjson.failcolor)
            //*//.setTitle("Error:")
            //*//.setDescription("You can't use this command on mobile devices/macbooks")
            //*//.setFooter("This command will support MACOS devices soon!")
            //*//message.channel.send(commandsEmbed2)
            //*//return;
        //*//}
        const CPU = os.cpus()
        const NETWORK = os.networkInterfaces()
        const PLATFORM = os.platform()
        const PLATFORMARCH = os.arch()
        var bytesAvailable = os.totalmem()
        const MEMORY = "Total memory available MB :" + (bytesAvailable/1048576)
        const CPUlog = console.log(CPU)
        const NETWORKlog = console.log(NETWORK)
        const PLATFORMlog = console.log(PLATFORM)
        const PLATFORMARCHlog = console.log(PLATFORMARCH)
        const MEMORYlog = console.log(MEMORY)
        const embed = new Discord.MessageEmbed()
        .setColor(commonjson.defaultcolor)
        .setTitle(`${message.author.tag}'s PC specs`)
        .addFields(
            { name: 'CPU:', value: `${CPUlog}`, inline: true},
            { name: "Network:", value: `${NETWORKlog}`, inline: true},
            { name: "Platform:", value: `${PLATFORMlog}`, inline: true},
            { name: "Arch:", value: `${PLATFORMARCHlog}`, inline: true},
            { name: "Memory:", value: `${MEMORYlog}`, inline: true}

        )
        .setThumbnail('http://logok.org/wp-content/uploads/2014/12/Windows-logo-2012-880x654.png')
        .setTimestamp()
        message.channel.send(embed)



    }
}