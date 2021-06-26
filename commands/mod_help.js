module.exports = {
    name: 'mod_help',
    discription: "this is a modhelp command!",
    execute(client, message, args, Discord){
        const embed1 = new Discord.MessageEmbed()
       .setTitle('mod commands')
       .setColor('#b499a1')
       .addFields(
           {name: "commands", value: 'kick, clear (amount max 100), ban, If it doesnt work, make a "mod" role, and give it to the mods'},
       )

       message.channel.send(embed1)
    }
}