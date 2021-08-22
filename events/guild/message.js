const profileModel = require('../../models/profileSchema');
const cooldowns = new Map();
const fs = require('fs')
module.exports = async (Discord, client, message) => {
    let prefixes = JSON.parse(fs.readFileSync("C:\Users\ale48\Desktop\Programming\Javascript\SERVER\DoodyBotNewestBuild\prefixes.json", "utf-8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    console.log(prefix)
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profiledata;
    try{
        profiledata = await profileModel.findOne({ userID: message.author.id });
        if(!profiledata){
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0
            });
            profile.save();
        }
    }catch(err){
        console.log(err)
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command){
        const embed1 = new Discord.MessageEmbed()
            .setTitle("Error:")
            .setDescription("❌ || You've entered an invalid command. Use `!info` for help!")
            .setColor('#FF0000')
        return message.channel.send(embed1)
    }
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const CurrentTime = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
        if(CurrentTime < expiration_time){
            const time_left = (expiration_time - CurrentTime) / 1000;
            const embed = new Discord.MessageEmbed()
            .setTitle("Cooldown!")
            .setDescription(`Please wait ${time_left.toFixed(1)} more seconds before using the ${command.name} command!`)
            .setColor('#FF0000')
            return message.channel.send(embed)
        }
    }
    time_stamps.set(message.author.id, CurrentTime);
    setTimeout(()=> time_stamps.delete(message.author.id), cooldown_amount);

    if(command) command.execute(message, args, cmd, client, Discord, profiledata, prefix);
}