
module.exports = {
    name: 'tempvoice',
    description: "creates a temp chat",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            wantedtime = args[0] * 60000
            if (!args.length){
                console.log("No arguments entered")
                return message.channel.send('ENTER THE WANTED AMOUNT OF TIME IN MINS')
            }
            if (wantedtime<1){
                console.log('Time entered less than one min')
                return message.channel.send('The time has to be more than one min')
            
            }else if (wantedtime < 100){
                console.log('Time entered more than 100 min')
                return message.channel.send('The time has to be less than 100 mins')
            }
            else{
                console.log(`voice channel created for ${args} mins`)
                message.guild.channels.create("tempvoicechannel", { type: 'voice' }).then(c => {
                message.reply(`A voice channel has been created for ${args} mins`)
            })
        }

            
            setTimeout(function(){
                console.log('Channel deleted')
                const fetchedChannel = message.guild.channels.cache.find(channel => channel.name ==="tempvoicechannel")
                fetchedChannel.delete();
             },wantedtime);
        }else{
            console.log("DOES NOT HAVE PERMS")
            return message.channel.send('Only admins can use this command!')
        }
    }
}