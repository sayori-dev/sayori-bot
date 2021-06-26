module.exports = {
    name: 'mood',
    discription: "this is a face reveal command!",
    execute(client, message, args, Discord ){
        const Responses = [
            "i'm feeling happy!",
            "i'm feeling sad...",
            "i'm feeling angry",
            "i'm a bit sick...",
            "im feeling good"
        ];

        const Response = Math.floor(Math.random() * Responses.length);

        message.channel.send(Responses[Response])
}
}