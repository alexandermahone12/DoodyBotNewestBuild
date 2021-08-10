module.exports = {

    name: 'color',
    description: "Changes your color",
    execute(message, args, cmd, client, Discord) {
            const multilineString = `
            <:redcolor:874703436241838202> <@&872060134833147906>

            <:greencolor:874703023031586836> <@&874681708765651024>

            <:purplecolor:874702566959775814> <@&874671480162635837>

            <:pinkcolor:874702329767678063> <@&874682308421111848>
            `;
            if (args[0] === 'init'){
                const commandsEmbed = new Discord.MessageEmbed()
                .setColor('FADF2E')
                .setTitle("List of colors")
                .setDescription(multilineString)
                .setFooter('DoodyBot version 1.1', 'https://i.postimg.cc/zftSmvqt/shadow.png');
                message.channel.send(commandsEmbed).then((msg) =>{
                    msg.react('<:redcolor:874703436241838202>');
                    msg.react('<:greencolor:874703023031586836>');
                    message.delete();
                    client.on("messageReactionAdd", (reaction, Member) => {
                        if(Member.bot) return;
                        reaction.message.reactions.cache.map(x=>{
                            if(x._emoji.name != reaction._emoji.name&&x.users.cache.has(Member.id)) x.users.remove(Member.id)
                        })
                    });
                    client.on('messageReactionAdd', async (reaction, user) => {
                        if (reaction.partial) { //this whole section just checks if the reaction is partial
                            try {
                                await reaction.fetch(); //fetches reaction because not every reaction is stored in the cache
                            } catch (error) {
                                console.error('Fetching message failed: ', error);
                                return;
                            }
                        }
                        if (!user.bot) {
                            if (reaction.emoji.id == "<:redcolor:874703436241838202>") { //if the user reacted with the right emoji
                    
                                const role = reaction.message.guild.roles.cache.find(r => r.name === "redcolor"); //finds role you want to assign (you could also user .name instead of .id)
                    
                                const { guild } = reaction.message //store the guild of the reaction in variable
                    
                                const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)
                    
                                member.roles.add(role); //assign selected role to member
                    
                            }
                        }
                    })
                }).catch((err)=>{
                    throw err;
                });

            }
        }
    }
