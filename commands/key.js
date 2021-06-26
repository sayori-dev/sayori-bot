module.exports = {
    name: 'key',
    discription: "this is a key command!",
    execute(client, message, args, Discord ){
        message.channel.send('you found a secret!');

    }
}