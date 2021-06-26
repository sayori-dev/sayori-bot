module.exports = {
    name: 'ping',
    discription: "this is a ping command!",
    execute(client, message, args, Discord ){
        message.channel.send('pong!');

    }
}