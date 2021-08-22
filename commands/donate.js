const profileModel = require("../models/profileSchema");
module.exports = {
  name: "donate",
  aliases: [],
  description: "gives a player some coins",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send("You need to mention a player to donate to them");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user does not have a bank account, tell them to use the !bankaccount command!`);

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

      return message.channel.send(`You donated ${amount} to <@&${target.id}>`);
    } catch (err) {
      console.log(err);
    }
  },
};
