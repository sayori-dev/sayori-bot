module.exports = {
    name: 'help',
    discription: "this is a help command!",
    execute(client, message, args, Discord ){
        const embed1 = new Discord.MessageEmbed()
       .setTitle('help commands')
       .setColor('#b499a1')
       .addFields(
           {name: "fun commands", value: 's-fun_commands'},
           {name: "currency commands", value: 's-help_currency'},
           {name: "mod only commands", value: 's-mod_help'},
           {name: "other commands", value: 'bugreport, invitebot, invite'},
       )

       message.channel.send(embed1)
    }
}