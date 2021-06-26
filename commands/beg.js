const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'beg',
    cooldown: 20,
    discription: "this is a beg command!",
    async execute(client, message, args, Discord, cmd, profileData ){
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,           
        }, 
        {
            $inc: {
                coins: randomNumber,
            },
        }
    );
      return message.channel.send(`${message.author.username}, great job you asked sayori for ${randomNumber}, coins`)
  },
};