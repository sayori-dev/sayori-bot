const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dab')
		.setDescription('please dont make me do this'),
	async execute(interaction) {
		await interaction.reply('thats so 2016, no...');
	},
};