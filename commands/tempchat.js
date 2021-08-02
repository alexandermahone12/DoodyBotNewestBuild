
module.exports = {
    name: 'tempchat',
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
            }else{
                console.log(`channel created for ${args} mins`)
                message.guild.channels.create("tempchannel", { type: 'text' }).then(c => {
                message.reply(`A text channel has been created for ${args} mins`)
            })
        }

            
            setTimeout(function(){ 
                console.log('Channel deleted')
                const fetchedChannel = message.guild.channels.cache.find(channel => channel.name ==="tempchannel")
                fetchedChannel.delete();
             },wantedtime);
        }else{
            console.log("DOES NOT HAVE PERMS")
            return message.channel.send('Only admins can use this command!')
        }
    }
}