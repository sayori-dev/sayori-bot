module.exports = {
    name: 'facereveal',
    discription: "this is a face reveal command!",
    execute(client, message, args, Discord ){
        const Responses = [
            "no thx",
            "how about no",
            "i-if you insist",
            "w-why?",
            "n-no"
        ];
        
        const Response = Math.floor(Math.random() * Responses.length);
        
        message.channel.send(Responses[Response])
}
}