module.exports = {
    name: 'ban',
    discription: "this is a ban command!",
    execute(client, message, args, Discord){


        if(message.member.roles.cache.some(r =>r.name === "mod")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id)
                memberTarget.ban();
                message.channel.send("User has been banned")
            }else{
                message.channel.send('You couldnt ban that user, try pinging next time, You big silly head!')
            }
    
        }else{ 
            message.channel.send("you are not a mod, Do you want me to make you one...?"); 
        }
    }
} 


