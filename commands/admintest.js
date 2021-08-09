module.exports = {

    name: 'admintest',
    description: "Clear messages!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("KICK_MEMBERS")){
            message.reply("You have perms:)")
    
    }else{
        message.reply("You dont have admin perms:(")
    }
}
}