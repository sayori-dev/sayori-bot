module.exports = {
    name: 'fun_commands',
    discription: "this is a help command!",
    execute(client, message, args, Discord ){
        const embed1 = new Discord.MessageEmbed()
       .setTitle('fun commands')
       .setColor('#b499a1')
       .addFields(
           {name: "fun commands", value: 'sans, tomato, soup, dab, facereveal, ping, scream, youtube, pie, sayori, natsuki, yuri, monika, mc'}
       )

       message.channel.send(embed1)
    }
}