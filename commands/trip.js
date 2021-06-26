module.exports = {
    name: 'trip',
    discription: "this is a settings command!",
    execute(client, message, args, Discord, cmd, profileData){
        try{
        const member = message.mentions.users.first()
        if( member.id === message.author.id){
            message.channel.send("you can't trip yourself dummy *trips over own feet*")
        }else{
            message.channel.send(`you have tripped ${member} thats not nice!`)
            message.channel.send("https://tenor.com/view/falling-moviehouse-popcorn-life-gif-5892272")
        }
    }catch(err){
        message.channel.send("try pinging an user!~")
        console.log(err)
    }

    }
}