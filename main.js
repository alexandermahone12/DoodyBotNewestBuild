const Discord = require('discord.js');
const mongo = require('./common.json')


const client = new Discord.Client();
require('discord-buttons')(client);
const prefix = '!';

const fs = require('fs');
const mongoose = require('mongoose');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handlers', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection: ', error);
  // Or some other error logging process
});

mongoose.connect(mongo.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(()=>{
  console.log("Connected to database. No errors found")
}).catch((err) =>{
  console.log(err);
});


client.on('guildMemberAdd', member => {
  const channel = message.guild.channels.cache.find(c => c.id === '875710227998191646');
  if(!channel) return;
  channel.send(`User ${member.user.tag} has joined Realm and is member number ${message.guild.memberCount + 1}`)  
});



// to run, node .
client.login(process.env.token);

