module.exports = {

    name: 'whoisthehottest',
    description: "none",
    execute(message, args, cmd, client, Discord) {
        const choiceone = 'Nobody'
        const choose = Math.random(1-10)
        if(choose === 1){
            choiceone = 'Abdullah'
        }else if(choose === 2){
            choiceone = 'd'
        }else if(choose === 3){
            choiceone = 'f'
        }else if(choose === 4){
            choiceone = 'g'
        }else if(choose === 5){
            choiceone = 'f'
        }else if(choose === 6){
            choiceone = 'j'
        }else if(choose === 7){
            choiceone = 'k'
        }else if(choose === 8){
            choiceone = '5'
        }else if(choose === 9){
            choiceone = 'v'
        }else if(choose === 10){
            choiceone = 'aa'
        }
        message.channel.send(`The hottest person is ${choiceone}`);

    }
 
}