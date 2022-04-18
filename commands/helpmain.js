const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with help commands!'),
	async execute(interaction){
		interaction.reply("omor");
           interaction.deleteReply();
		const embed1 = new MessageEmbed()
		.setTitle('help commands')
		.setColor('#b499a1')
		.addFields(
			{name: "fun commands", value: '/fun_commands'},
			{name: "currency commands", value: '/help_currency'},
			{name: "mod only commands", value: '/mod_help'},
			{name: "other commands", value: 'bugreport, invitebot, invite'},
		)

       interaction.channel.send({ embeds: [embed1] });
    }
}
