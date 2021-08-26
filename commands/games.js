const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })
module.exports = {
    name: "game",
    description: "Fun games to play",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        if (!args.length){
            const embed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle('What game would you like to play?')
            .setDescription("List of games: \n `tictactoe` \n new games will be added shortly!")
            .setFooter("If you have any suggestions use !suggest (suggestion)")
            message.channel.send(embed1)
            return
        }
        if (args[0] === 'tictactoe'){
            game.handleMessage(message);    
            
        }
    }
}