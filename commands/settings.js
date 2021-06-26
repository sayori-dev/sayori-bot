module.exports = {
    name: 'settings',
    discription: "this is a settings command!",
    execute(client, message, args, Discord){
        const embed1 = new Discord.MessageEmbed()
       .setTitle('settings')
       .setColor('#b499a1')
       .addFields(
           {name: "rob mode", value: 'true/false'}
       )

       message.channel.send(embed1)
    }
}