const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'dep',
    discription: "this is a dep command!",
    async execute(client, message, args, Discord, cmd, profileData ){
        const amount = args[0];
        if(amount % 1 != 0 ||amount <= 0) return message.channel.send("its not a number? :thinking:");
        try{
            if(amount > profileData.coins) return message.channel.send('you dont have that amount of coins')
            await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                $inc: {
                    coins: -amount,
                    bank: amount,
                }

            }
        );
        return message.channel.send(`you deposited ${amount} of your coins in your bank`)
        }catch(err){
            console.log(err)
        }
    }
}
