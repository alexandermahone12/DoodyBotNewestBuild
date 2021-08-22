const profileModel = require("../models/profileSchema");
module.exports = {
  name: "donate",
  aliases: [],
  description: "gives a player some coins",
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args.length) return message.channel.send("You need to mention a player to donate to them");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");
    if (target.id === message.author.id) return message.channel.send('You cant donate to yourself')

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user does not have a bank account, tell them to use the !bankaccount command!`);
      if (profileData.coins < amount) return message.channel.send("You dont have enough coins in your wallet!")

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
          },
        }
      );

      return message.channel.send(`You donated ${amount}Coins to <@${target.id}>`);
    } catch (err) {
      console.log(err);
    }
  },
};
