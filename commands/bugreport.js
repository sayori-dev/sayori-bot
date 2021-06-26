module.exports = {
    name: "bugreport",
    description: 'lets user report bugs',
    async execute(client, message, args, Discord, cmd, profileData){
        const channel = client.channels.cache.get('834034498231861248')

        const query = args.join(' ');
        if (!query) return message.reply('please specify the bug')

        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('new Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);

        message.channel.send("**Bug report has been sent!~**")
    }
}