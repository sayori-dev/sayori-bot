module.exports = {
    name: 'clear',
    discription: "this is a clear command!",
    async execute(client, message, args, Discord ){

        if(message.member.roles.cache.some(r => r.name === "mod")){
            if(!args[0]) return message.reply("enter the amount of messages that you want to clear, you silly head!");
            if(isNaN(args[0])) return message.reply("enter a real number, dummy!");
            
            if(args[0] > 100) return message.reply("you cant delete more than 100 messages dummy!");
            if(args[0] < 1) return message.reply("you need a bigger number dummy!");
    
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
    
        });
      }else {
          message.channel.send("you arent a mod")
      }
    }
}
        
