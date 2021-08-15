module.exports = {
  name: "ticket",
  aliases: [],
  permissions: [],
  description: "open a ticket!",
  async execute(message, args, cmd, client, Discord) {
    if (!args.length){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            if(message.member.permissions.has("KICK_MEMBERS")){
                const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
                
                channel.setParent("876290307422048266");


                channel.updateOverwrite(message.guild.id, {
                SEND_MESSAGE: false,
                VIEW_CHANNEL: false,
                });
                channel.updateOverwrite(message.author, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: true,
                });

                const reactionMessage = await channel.send("Thank you for contacting support! The moderation team will get back to you as soon as possible. To close this ticket, Use !closeticket");

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
    }else if(args[0] === 'close'){
        channel.send("Deleting this channel in 5 seconds!");
        setTimeout(() => channel.delete(), 5000);
        break;
    }
  },
};