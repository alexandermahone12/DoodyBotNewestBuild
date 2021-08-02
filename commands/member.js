module.exports = {

    name: 'member',
    aliases: ['giveemember', 'memberrole'],
    description: "If for somereasom you do not have the mmeber role, type this command to get it!",
    execute(message, args, cmd, client, Discord) {
        if(message.member.roles.cache.has('851393705734438933')){
            message.channel.send('You already have the member role!');
        }else {
            message.channel.send("You have the member role now!")
            message.member.roles.add('851393705734438933')
        }

    }
 
}