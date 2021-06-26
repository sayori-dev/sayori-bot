module.exports = {
    name: 'status',
    discription: "this is a soup command!",
    execute(client, message, args, Discord){
        const Responses = [
            "with a noose",
            "new command! check it out at s-help!",
            "check out our currency system!~"
        ];
        
        const Response = Math.floor(Math.random() * Responses.length);

        client.user.setActivity(Responses[Response], {type: 'PLAYING'}).catch(console.error);
        message.channel.send("status has been set!~")
    }
}