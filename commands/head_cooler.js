const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'head_cooler',
    discription: "this is a shop command!",
    async execute(client, message, args, Discord, cmd, profileData){
       const amount = 600
       const Amountcooler = 1
       
       if(amount > profileData.coins){
           message.channel.send("you don't have enough coins")
       }else{
        await profileModel.findOneAndUpdate(
            {
            userID: message.author.id
            },
            {
            $inc: {
                coins: -amount,
                headcool: Amountcooler,
            }

        }
    );
    message.channel.send("you bought a head cooler!")
       }
    }
}