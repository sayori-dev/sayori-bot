const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'profile',
    discription: "this is a shop command!",
    async execute(client, message, args, Discord, cmd, profileData){
        if (!args[0]) return message.channel.send(`you have ${profileData.headcool} head coolers!~`)
        else {
            const target = message.mentions.users.first();
            if (!target) return message.channel.send("this user doesnt exist")
            const dotData = await profileModel.findOne({ userID: target.id});
            if (!dotData) return message.channel.send ("this user doesn't exist in the db")
            await profileModel.find(
                {
                    userID: target.id
                }
            );
            return message.channel.send(`this user has ${dotData.headcool} head coolers!~`)
        }
    }
}