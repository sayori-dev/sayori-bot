const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('facereveal')
		.setDescription('shows my face'),
	async execute(interaction) {               
        const Responses = [
            "no thx",
            "how about no",
            "i-if you insist",
            "w-why?",
            "n-no"
        ];
        
        const Response = Math.floor(Math.random() * Responses.length);       
        await interaction.reply(Responses[Response])
	},
};