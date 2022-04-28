const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cookie')
		.setDescription('gives the bot a cookie for their good work!'),
		async execute(interaction) {
			await interaction.reply	('Thanks! *noms cookie*');
	}
};