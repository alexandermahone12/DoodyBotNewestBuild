
module.exports = {

    name: 'serverinfo',
    description: "says hi",
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
      if (message.channel instanceof Discord.DMChannel){
        return message.channel.send("You cannot use this command in DMs")
    }else{
        const ServerLogo = message.guild.iconURL();
        const ServerInfoEmbed = new Discord.MessageEmbed()
            .setColor('#554846')
            .setTitle("Server Info")
            .setImage(ServerLogo)
            .setDescription(`About **${message.guild}**`)
            .addField("**Date Created**", `Server Created on **${message.guild.createdAt.toLocaleString()}**`)
            .addField("**Owner**", `The Owner of This Server is ${message.guild.owner}`)
            .addField("**Member Count**", "This Server Has ` " + `${message.guild.memberCount}` + " ` **Members**")
            .addField("**Emoji Count**", "This Server Has ` " + `${message.guild.emojis.cache.size}` + " ` **Emojis**")
            .addField("**Roles Count**", "This Server Has ` " + `${message.guild.roles.cache.size}` + " ` **Roles**")
            .addField("**Channels Count**", "This Server Has ` " + `${message.guild.channels.cache.size}` + " ` **Channels**")
            .addField("**Server Logo**", `**[Downlaod Server Logo](${ServerLogo})**`)
            .setURL(ServerLogo)
            message.channel.send(ServerInfoEmbed)
          }    }
        }