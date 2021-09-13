module.exports = {
    name: 'admin',
    description: 'Null',
    cooldown: 100,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        if (profiledata.banned === "No"){
            message.channel.send("True")
        
        }else{
            message.channel.send("False")
        }
    }
}