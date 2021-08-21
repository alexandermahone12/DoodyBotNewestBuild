const problems = require('maths-problems')
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
                var additionProblem = {
                    "question" : "What is {x=randomInt(1,10)} + {y=randomInt(1,10)}?",
                    "answer" : ["{x}+{y}"],
                    "answerFormat" : "0"
                }
                const question = problems.generateQuestions(additionProblem, [5,5])
                var result = problems.markQuestion(question, additionProblem)
                const questions = [
                    `What is ${question}`
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
                        if (value.content === result){
                            message.channel.send("Correct!")
                            return
                        }else{
                            message.channel.send("Incorrect!")
                        }
                    })
                })
            }
        }
    }
}