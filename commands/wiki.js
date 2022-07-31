const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wiki')
		.setDescription('look up wikipedia articals')
        .addStringOption(option => option.setName('wiki').setDescription('enter a wiki page').setRequired(true)),
	async execute(interaction) {
		let profileData;
			profileData = await profileModel.findOne({ userID: interaction.member.id });
        const string = interaction.options.getString('wiki');
		if(profileData.childSafe == 1 && string.includes("sex") || profileData.childSafe == 1 && string.includes("gore") || profileData.childSafe == 1 && string.includes("suicide") || profileData.childSafe == 1 && string.includes("hentai") || profileData.childSafe == 1 && string.includes("guro")){
			interaction.reply("you are a child, don't lookt this up");
		}else{
		await interaction.reply(`https://en.wikipedia.org/wiki/${string}`);
		}

	},
};

//https://en.wikipedia.org/wiki/