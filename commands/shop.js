module.exports = {
    name: 'shop',
    discription: "this is a shop command!",
    execute(client, message, args, Discord){
       const embed1 = new Discord.MessageEmbed()
       .setTitle('buy stuff')
       .addFields(
           {name: "sayori's to buy type: s-head_cooler", value: '600 coins'}
       )

       message.channel.send(embed1)
    }
}