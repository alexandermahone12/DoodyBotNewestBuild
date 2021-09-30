const profileModel = require("../models/profileSchema");
module.exports = {
  name: "give",
  aliases: [],
  description: "give a player some coins",
  async execute(message, args, cmd, client, Discord, profiledata, commonjson) {
    if (message.member.id != "462014203834662913") return
    if (!args.length) return message.channel.send("You need to mention a player to give them coins");
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

      return message.channel.send(`This player has been given ${amount} coins!`);
    } catch (err) {
      console.log(err);
    }
  },
};
