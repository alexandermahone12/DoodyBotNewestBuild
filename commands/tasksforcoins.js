module.exports = {
    name: "task",
    description: "Generates a mathematical problem",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            const questions = [
                "What is 2+2"
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

            collector.on('end', collected => {
                console.log(`Collected ${collected.size} messages!`)

                let counter = 0
                collected.forEach((value) => {
                    console.log(questions[counter++], value.content)
                    if (value.content === '4'){
                        return message.channel.send("Correct!")
                    }else{
                        message.channel.send("Incorrect!")
                    }
                })
            })

        }
    }
}