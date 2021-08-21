
const profileModel = require('../models/profileSchema')

module.exports = {
    name: "task",
    description: "Generates a mathematical problem",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if (!args.length){
                message.channel.send("What kind of game would you like to play?")
            }
            if (args[0] === 'math'){
                const a = Math.round(Math.random()*10)
                const b = Math.round(Math.random()*10)
                const result = a + b
                const questions = [
                    `What is ${a} + ${b}`
                ]
                let counter = 0
                const filter = m => m.author.id === message.author.id
                const collector = new Discord.MessageCollector(message.channel, filter, {
                    max: questions.length,
                    time: 1000 * 10,
                })

                message.channel.send(questions[counter++])
                collector.on('collect', m => {
                    if (counter < questions.length){
                        m.channel.send(questions[counter++])
                    }
                })

                collector.on('end', collected => {
                    console.log(`Collected ${collected.size} messages!`)

                    let counter = 0
                    collected.forEach(async(value) => {
                        console.log(questions[counter++], value.content)
                        console.log(`Result is ${result}`)
                        if (value.content === `${result}`){
                            const prize = Math.floor(Math.random() * 2000) + 1
                            const commandsEmbed1 = new Discord.MessageEmbed()
                            .setColor('#554846')
                            .setDescription("Correct! You won `" + `${prize}` + "`Coins!" )
                            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                            const response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            }, 
                            {
                                $inc: {
                                    coins: prize,
                                },
                            }
                            );
                            return message.channel.send(commandsEmbed1)
                        }else{
                            const commandsEmbed2 = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setDescription("Incorrect :(")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(commandsEmbed2)
                        }
                    })
                })
            }else if(args[0] === 'search'){
                const locations = [
                    "car",
                    "bathroom",
                    "bedroom",
                    "park",
                    "pocket",
                    "hospital",
                    "school",
                    "truck",
                    "mall",
                    "garage",
                    "shoe",
                    "van",
                    "bushes"
                ];
                if (args[1] === 'map'){
                    const commandsEmbed3 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setTitle('List of locations:')
                        .setDescription(locations)
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(commandsEmbed3)
                    return
                }

                const chosenLocations = locations.sort(() => Math.random()).slice(0, 3);
                const filter2 = ({ author , content}) => message.author == author && chosenLocations.some((location) => location.toLowerCase() == content.toLowerCase());

                const collector2 = message.channel.createMessageCollector(filter2, {max: 1, time:10000});

                const prize2 = Math.floor(Math.random() * (2000 - 1 + 1)) + 1;

                collector2.on('collect', async (m2) => {
                    const commandsEmbed4 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setDescription("Correct! You won `" + `${prize2}` + "`Coins!" )
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        const response2 = await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        }, 
                        {
                            $inc: {
                                coins: prize2,
                            },
                        }
                        );
                        return message.channel.send(commandsEmbed4)
                });
                
                collector2.on('end', (collected2, reason) =>{
                    if (reason == "time"){
                        const commandsEmbed5 = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setDescription("You ran out of time :(")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(commandsEmbed5)
                    }
                });
                const commandsEmbed6 = new Discord.MessageEmbed()
                .setColor('#554846')
                .setTitle("What location would you like to search?")
                .setDescription(`Type the location name in this channel\n \`${chosenLocations.join('` `')}\``)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(commandsEmbed6)
            }
        }
    }
}