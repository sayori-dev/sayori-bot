module.exports = {
    name: 'help_currency',
    discription: "this is a helpcurrency command!",
    execute(client, message, args, Discord ){
        const embed1 = new Discord.MessageEmbed()
       .setTitle('currency help!')
       .setColor('#b499a1')
       .addFields(
           {name: "commands", value: 'bal, beg, dep, withdraw, shop, rob,'},
       )

       message.channel.send(embed1)
    }
}