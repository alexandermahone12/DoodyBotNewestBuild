
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
                    time: 1000 * 5,
                })

                message.channel.send(questions[counter++])
                collector.on('collect', m => {
                    if (counter < questions.length){
                        m.channel.send(questions[counter++])
                    }
                })

                collector.on('end', async collected => {
                    console.log(`Collected ${collected.size} messages!`)

                    let counter = 0
                    collected.forEach((value) => {
                        console.log(questions[counter++], value.content)
                        console.log(`Result is ${result}`)
                        if (value.content === `${result}`){
                            const prize = Math.floor(Math.random() * 500) + 1
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
                            message.channel.send("Incorrect:(!")
                        }
                    })
                })
            }
        }
    }
}