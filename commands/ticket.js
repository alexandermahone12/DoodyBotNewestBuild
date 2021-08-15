module.exports = {
  name: "ticket",
  aliases: [],
  permissions: [],
  description: "open a ticket!",
  async execute(message, args, cmd, client, Discord) {
    if (message.channel instanceof Discord.DMChannel){
        return message.channel.send("You cannot use this command in DMs")
    }else{
        if(message.member.permissions.has("KICK_MEMBERS")){
            const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
            
            const catagory = channel.setParent("820276801652916270");
            if (!catagory) return message.channel.send("Ticket command can only be used in doodys server.")

            channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
            });
            channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
            });

            const reactionMessage = await channel.send("Thank you for contacting support!");

            try {
            await reactionMessage.react("🔒");
            await reactionMessage.react("⛔");
            } catch (err) {
            channel.send("Error sending emojis!");
            throw err;
            }

            const collector = reactionMessage.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
            { dispose: true }
            );

            collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
                case "🔒":
                channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
                break;
                case "⛔":
                channel.send("Deleting this channel in 5 seconds!");
                setTimeout(() => channel.delete(), 5000);
                break;
            }
            });

            message.channel
            .send(`We will be right with you! ${channel}`)
            .then((msg) => {
                setTimeout(() => msg.delete(), 7000);
                setTimeout(() => message.delete(), 3000);
            })
            .catch((err) => {
                throw err;
            });
        }else{
            message.channel
            .send(`Tickets are unavailable right now.`)
            .then((msg1) => {
                setTimeout(() => msg1.delete(), 7000);
                setTimeout(() => message.delete(), 3000);
            })
            .catch((err) => {
                throw err;
            });
            
        }
    }
  },
};