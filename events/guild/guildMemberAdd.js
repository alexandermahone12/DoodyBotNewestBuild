const profileModel = require('../../models/profileSchema');

module.exports = async(client, Discord) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0,
        banned: "No",
        message: 0
    });
    profile.save();
};