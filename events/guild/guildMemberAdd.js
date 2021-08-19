const profileModel = require('../../models/profileSchema');

module.exports = async(Discord, client, message) =>{
    let profile = await profileModel.create({
        userID: message.member.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0
    });
    profile.save();
};