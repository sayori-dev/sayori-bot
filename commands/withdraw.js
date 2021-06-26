const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'withdraw',
    aliases: ['with'],
    discription: "this is a dep command!",
    async execute(client, message, args, Discord, cmd, profileData ){
        const amount = args[0];
        if(amount % 1 != 0 ||amount <= 0) return message.channel.send('withdraw amount must be a whole number, dummy!');
        try{
            if(amount > profileData.bank) return message.channel.send('you dont have that amount of coins')
            await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                $inc: {
                    coins: amount,
                    bank: -amount,
                }

            }
        );
        return message.channel.send(`you withdrawn ${amount} of your coins in your wallet`)
        }catch(err){
            console.log(err)
        }
    }
}
