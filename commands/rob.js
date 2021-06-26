const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'rob',
    cooldown: 20,
    discription: "this is a rob command!",
    async execute(client, message, args, Discord, cmd, profileData){
        const member = message.mentions.users.first();
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        const dotData = await profileModel.findOne({ userID: member.id});

        if (!dotData){ return message.channel.send ("this user doesn't exist in the db")
        }else{

        if (profileData.robbing === 0){
            message.channel.send("you can't rob anyone if you don't wanna get robbed")
        }else{

        if (dotData.robbing === 0){
            message.channel.send("this user doesn't wanna get robbed :sob:")
        }else{

        if (member.id === message.author.id){
            message.channel.send("you cant rob yourself can you?")
        }else{

            if (dotData.coins < randomNumber){
                message.channel.send("this user doesn't have enough coins :sob:") 
            }else{
                await profileModel.findOneAndUpdate(
                    {
                    userID: member.id
                    },
                    {
                    $inc: {
                        coins: -randomNumber,
                    }
    
                }
            );
            await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                $inc: {
                    coins: randomNumber,
                }
    
            }
        );
    
            return message.channel.send(`${message.author.username}, great job you stole ${randomNumber}, coins`)
            }
        } 
        }   
    }
    }
    }
}