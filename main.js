const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handlers', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection: ', error);
  // Or some other error logging process
});


// to run, node .
client.login(process.env.token);

