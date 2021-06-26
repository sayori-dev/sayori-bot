const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'rob_mode_false',
    discription: "this is a tomato command!",
    async execute(client, message, args, Discord, cmd, profileData){
        const amount = 1
        if (profileData.robbing > 0) { 
            await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                $inc: {
                robbing: -amount,
                }

            }
        );
        return message.channel.send("done!~")
        } else {
            message.channel.send("it's already off!~")
        }

    }
}