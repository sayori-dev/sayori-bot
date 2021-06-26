const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'bal',
    discription: "this is a balcommand!",
    async execute(client, message, args, Discord, cmd, profileData ){
        if (!args[0]) return message.channel.send(`your coin bal is ${profileData.coins} bank bal is ${profileData.bank}`)
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
            return message.channel.send(`this user's coin bal is ${dotData.coins} and their bank bal is ${dotData.bank}`)
        }
    
    }
}