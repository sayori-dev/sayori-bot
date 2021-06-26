module.exports = {
    name: 'tomato',
    discription: "this is a tomato command!",
    execute(client, message, args, Discord){
        message.channel.send(':tomato:');

    }
}