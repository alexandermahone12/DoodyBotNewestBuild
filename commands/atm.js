const profileModel = require('../models/profileSchema')
module.exports = {
    name: "atm",
    description: "Opens the atm panel",
    cooldown: 10,
    async execute(message, args, cmd, client, Discord, profiledata) {
        if (!args.length){
            const embed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle('ATM panel')
            .setDescription('This is the ATM command panel.')
            .addFields(
                { name: '🛠️ATM normal commands', value:"`" + "withdraw" + "`:withdraws the wanted amount of coins from your bank to the wallet\n " + "`" + "deposit" + "`:deposits the wanted amount of coins from your wallet to the bank\n" + "`" + "balance" + "`:shows your coin balance in the wallet & bank\n"+ "`" + "transfer" + "`:transfers the wanted amount of coins to the mentioned person\n", inline: true },
                { name: '🚨ATM bad commands', value: "`" + "robatm" + "`:robs an atm. money prize ranges from 100-3000 and chance of getting caught is one in 5 tries\n" + "`" + "robbank" + "`:robs a bank. money prize ranges from 1000-30000 and chance of getting caught is 5 in 10 tries\n", inline: true}
            )
            message.channel.send(embed1)
        }
        if (args[0] === 'withdraw'){
            const commandsEmbed143242 = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle("🪙Withdraw error:")
                .setDescription(`Withdraw amount must be a whole number!`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            const commandsEmbed543532 = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle("🪙Withdraw error:")
                .setDescription(`You don't have that amount of coins in your bank to withdraw!`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            const amount = args[1];
            if (amount %1 != 0 || amount <= 0) return message.channel.send(commandsEmbed143242);
            try{
                if (amount > profiledata.bank) return message.channel.send(commandsEmbed543532);
                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: amount,
                        bank: -amount
                    }
                }
                
                );
                const commandsEmbed34243 = new Discord.MessageEmbed()
                    .setColor('#554846')
                    .setTitle("🪙Withdraw:")
                    .setDescription(`You withdrew ${amount} coins into your wallet!`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                return message.channel.send(commandsEmbed34243)
            }catch(err){
                console.log(err)
            }
        }
        if (args[0] === 'deposit'){
            if (message.channel instanceof Discord.DMChannel){
                return message.channel.send("You cannot use this command in DMs")
            }else{
                const commandsEmbed132131 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("🪙Deposit error:")
                    .setDescription(`Deposit amount must be a whole number!`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                const commandsEmbed4344 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("🪙Deposit error:")
                    .setDescription(`You don't have that amount of coins to depoist!`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                const amount2 = args[1];
                if (amount2 %1 != 0 || amount2 <= 0) return message.channel.send(commandsEmbed132131);
                try{
                    if (amount2 > profiledata.coins) return message.channel.send(commandsEmbed4344);
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: -amount2,
                            bank: amount2
                        }
                    }
                    
                    );
                    const commandsEmbed534533 = new Discord.MessageEmbed()
                        .setColor('#554846')
                        .setTitle("🪙Deposit:")
                        .setDescription(`You've deposited ${amount2} coins into your bank!`)
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    return message.channel.send(commandsEmbed534533)
                }catch(err){
                    console.log(err)
                }
            }
        }
        if (args[0] === 'transfer'){
            if (!args.length) return message.channel.send("You need to mention a player to donate to them");
            const amount3 = args[2];
            const target = message.mentions.users.first();
            if (!target) return message.channel.send("That user does not exist");
            if (target.id === message.author.id) return message.channel.send('You cant donate to yourself')

            if (amount3 % 1 != 0 || amount3 <= 0) return message.channel.send("Deposit amount must be a whole number");

            try {
            const targetData = await profileModel.findOne({ userID: target.id });
            if (!targetData) return message.channel.send(`This user does not have a bank account, tell them to use the !bankaccount command!`);
            if (profiledata.coins < amount3) return message.channel.send("You dont have enough coins in your wallet!")

            await profileModel.findOneAndUpdate(
                {
                userID: target.id,
                },
                {
                $inc: {
                    coins: amount3,
                },
                }
            );

            await profileModel.findOneAndUpdate(
                {
                userID: message.author.id,
                },
                {
                $inc: {
                    coins: -amount3,
                },
                }
            );

            return message.channel.send(`You donated ${amount3}Coins to <@${target.id}>`);
            } catch (err) {
            console.log(err);
            }
        }
        if (args[0] === 'balance'){
            const commandsEmbed1434 = new Discord.MessageEmbed()
            .setColor('#554846')
            .addFields(
                {name: "Wallet:", value: `🪙${profiledata.coins} coins`},
                {name: "Bank:", value: `🪙${profiledata.bank} coins`},
            )
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(commandsEmbed1434);
        }
        if (args[0] === 'robatm'){
            var charge = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
            var chance = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            console.log(chance)
            var prize = Math.floor(Math.random() * (3000 - 100 + 1)) + 100;
            if (profiledata.coins > charge){
                if(chance = 4){
                    const commandsEmbed1434344 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription(`Oh no! You got caught while robbing the atm machine! You were charged `+`${charge}`+"`Coins!")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(commandsEmbed1434344);
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: -charge,
                        },
                        }
                    );
                    return
                }
             }else{
                const commandsEmbed1434344344 = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription("Phew! You almost got caught! You sucsessfully robbed the atm machine and got `"+`${prize}`+"`Coins!")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(commandsEmbed1434344344);
                await profileModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                    },
                    {
                    $inc: {
                        coins: prize,
                    },
                    }
                ); }
        }
    }
}