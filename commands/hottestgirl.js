module.exports = {

    name: 'whoisthehottest',
    description: "none",
    execute(message, args, cmd, client, Discord) {
        var myArray = [
            "Abdullah",
            "No one",
            "Khalid",
            "Catalina",
            "Saba",
            "Zahra",
            "Janna",
            "Mubarak",
            "Shamouk",
            "Moff",
            "Ghamdan",
            "Essa"
          ];
          
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#0000')
        .setDescription(`The hottest person is ${randomItem}`);
        message.channel.send(commandsEmbed);

    }
 
}