const profileModel = require('../models/profileSchema')
module.exports = {
    name: "atm",
    description: "Opens the atm panel",
    async execute(message, args, cmd, client, Discord, profiledata, prefix) {
        if (!args.length){
            const embed1 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle('ATM panel')
            .setDescription('This is the ATM command panel.')
            .addFields(
                { name: '🛠️ATM normal commands', value:"`" + "withdraw" + "`:withdraws the wanted amount of coins from your bank to the wallet\n " + "`" + "deposit" + "`:deposits the wanted amount of coins from your wallet to the bank\n" + "`" + "balance" + "`:shows your coin balance in the wallet & bank\n"+ "`" + "transfer" + "`:transfers the wanted amount of coins to the mentioned person\n"+ "`" + "bankaccount" + "`:This configures your bank account, current commands: reset (resets ur balance, be careful when using this command)\n", inline: true },
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
            var myArray = [
                "Caught",
                "money",
              ];
            var charge = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
            var chance = myArray[Math.floor(Math.random()*myArray.length)];
            console.log(chance)
            var prize = Math.floor(Math.random() * (3000 - 100 + 1)) + 100;
            if(chance === 'money'){
                const commandsEmbed1434344344 = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription("💰Phew! You almost got caught! You successfully robbed the atm machine and got `"+`${prize}`+"`Coins!💰")
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
                ); 
                return
                    
            }
            if (chance === 'Caught'){
                    const commandsEmbed1434344 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription("🚨Oh no! You got caught while robbing the atm machine! You were charged `"+`${charge}`+"`Coins!🚨")
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
                 
             }
        }
        if(args[0] === 'robbank'){
            var myArray1 = [
                "Caught",
                "money",
              ];
            var charge1 = Math.floor(Math.random() * (15000 - 5000 + 1)) + 500;
            var chance1 = myArray1[Math.floor(Math.random()*myArray1.length)];
            console.log(chance1)
            var prize1 = Math.floor(Math.random() * (30000 - 1000 + 1)) + 100;
            if(chance1 === 'money'){
                const embed4 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription("💰You robbed the bank successfully! But you're on the police's watch list now! be careful next time! You got`"+`${prize1}`+"`Coins!💰")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed4);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                    $inc: {
                        coins: prize1,
                    },
                    }
                ); 
                return
                    
            }
            if (chance1 === 'Caught'){
                    const embed45 = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setDescription("🚨You got caught! You were charged `"+`${charge1}`+"`Coins!🚨")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed45);
                    await profileModel.findOneAndUpdate(
                        {
                        userID: message.author.id,
                        },
                        {
                        $inc: {
                            coins: -charge1,
                        },
                        }
                    );
                 
             }
        }
        if(args[0] === 'bankaccount'){
            if (args[1] === 'reset'){
                const response = await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    }, 
                    {
                        $inc: {
                            coins: -profiledata.coins,
                            bank: -profiledata.bank,
                        },
                    }
                ); 
                const commandsEmbed5345334 = new Discord.MessageEmbed()
                .setTitle("You've successfully reset your bank account!")
                .setFooter("if this was a mistake contact one of the server admins!")
                message.channel.send(commandsEmbed5345334)
                return
            }
            const embed434324 = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("You've successfully created a bank account! Use !atm for more information regarding the banking system")
            message.channel.send(embed434324);
            return
            
        }
        if (args[0] === 'job'){
            if (args[1] === 'drugdealer'){
                const response12 = await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                        job: "Drug dealer"
                    }, 

                );
                message.channel.send("Done")
                return 
            }

            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            if (args[1] === 'drugdealer'){

            }
            const embedJOB = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("available jobs:")
            .setDescription("Please note that these most of these jobs only grant you a role and a salary everyday. When you get a job you don't have to do anything!\n Use !atm job (job name without spaces or capitalization) \n")
            .addFields(
                { name: "🚨Illegal jobs", value: "`Drug dealer`\n `Black hat hacker` \n `Robber`", inline: true},
                { name: "👨‍⚕️Legal jobs", value: "`Doctor` \n `Engineer` \n `Nurse`", inline: true},
                { name: "🕴️Government jobs", value: "`Police officer` \n `Politican` \n `Minister`", inline: true},
                { name: "❓Current Job:", value: "`" + `${profiledata.job}` + "`", inline: true}
            )
            message.channel.send(embedJOB)
            return
        }
    }
}