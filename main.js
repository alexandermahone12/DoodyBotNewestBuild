const Discord = require('discord.js');
const mongo = require('./common.json')
const Canvas = require('canvas');

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

client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.find(g => g.id === '886924220020457512');
  if (!channel) return;
  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext('2d')
  const backgroud = await Canvas.loadImage('./CanvasScreenTemplate.png')
  ctx.drawImage(backgroud, 0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#C0C0C0';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  var textString3 = `${member.user.username}`;
  //if the text is too big then smaller the text
  if (textString3.length >= 14) {
    ctx.font = 'bold 100px Genta';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(textString3, 720, canvas.height / 2 + 20);
  }
  //else dont do it
  else {
    ctx.font = 'bold 150px Genta';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(textString3, 720, canvas.height / 2 + 20);
  }
  //define the Discriminator Tag
  var textString2 = `#${member.user.discriminator}`;
  ctx.font = 'bold 40px Genta';
  ctx.fillStyle = '#f2f2f2';
  ctx.fillText(textString2, 730, canvas.height / 2 + 58);
  //define the Member count
  var textString4 = `Member #${member.guild.memberCount}`;
  ctx.font = 'bold 60px Genta';
  ctx.fillStyle = '#f2f2f2';
  ctx.fillText(textString4, 750, canvas.height / 2 + 125);
  //get the Guild Name
  var textString4 = `${member.guild.name}`;
  ctx.font = 'bold 60px Genta';
  ctx.fillStyle = '#f2f2f2';
  ctx.fillText(textString4, 700, canvas.height / 2 - 150);
  //create a circular "mask"
  ctx.beginPath();
  ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
  ctx.closePath();
  ctx.clip();
  //define the user avatar
  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  //draw the avatar
  ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
  //get it as a discord attachment
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'CanvasScreenTemplate.png');
  message.channel.send(attachment)

});




// to run, node .
client.login(process.env.token);

