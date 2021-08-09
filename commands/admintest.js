module.exports = {

    name: 'admintest',
    description: "Clear messages!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            message.channel.send("You have perms!")
    
    }else{
        message.channel.send("You dont have admin perms!")
    }
}
}