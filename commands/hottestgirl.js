module.exports = {

    name: 'whoisthehottest',
    description: "none",
    execute(message, args, cmd, client, Discord) {
        var myArray = [
            "Abdullah",
            "No one",
            "wdadadadd",
            "dkawhbdkbad"
          ];
          
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
        message.channel.send(`The hottest person is ${randomItem}`)

    }
 
}