module.exports = {
    name: 'invitebot',
    discription: "this is a invitebot command!",
    execute(client, message, args, Discord ){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=805433648517873664&scope=bot&permissions=142350');

    }
}