module.exports = {
    name: 'pie',
    discription: "this is a pie command!",
    execute(client, message, args, Discord){
        message.channel.send('3.1415926535897932384623');

    }
}