module.exports = {
    name: 'soup',
    discription: "this is a soup command!",
    execute(client, message, args, Discord){
        message.channel.send(':canned_food:');

    }
}