const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'rob_mode_true',
    discription: "this is a tomato command!",
    async execute(client, message, args, Discord, cmd, profileData){
        const amount = 1
        if (profileData.robbing < 1) { 
            await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                $inc: {
                robbing: amount,
                }

            }
        );
        return message.channel.send("done!~")
        } else {
            message.channel.send("it's already on!~")
        }

    }
}