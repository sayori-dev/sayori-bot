const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('new_command')
		.setDescription('tell me to make new commands, or dm me! @Sayori#0132')
        .addStringOption(option => option.setName('input').setDescription('Enter a string')
        .setRequired(true)),
	async execute(interaction){
        const string = interaction.options.getString('input');
    const channel = interaction.client.channels.cache.get("834034498231861248");

    const embed1 = new MessageEmbed()
    .setTitle('new command!!!!')
    .setColor('#b499a1')
    .addFields(
        {name: "User:", value: `${interaction.member}`},
        {name: "From:", value: `${interaction.guild}`},
        {name: "command", value: `${string}`}
    )
    interaction.reply("command idea has been sent!~ (if you want to help make the bot better: https://forms.gle/2hFnMjA5wuuM7qHb9wuuM7qHb9)");
    channel.send({ embeds: [embed1] });
    }
} 
