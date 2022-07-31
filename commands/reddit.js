const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reddit')
		.setDescription('look up sub reddits')
        .addStringOption(option => option.setName('subreddit').setDescription('enter a reddit page')
		.setRequired(true)),
	async execute(interaction) {
		let profileData;
			profileData = await profileModel.findOne({ userID: interaction.member.id });
        const string = interaction.options.getString('subreddit');
		if(profileData.childSafe == 1 && string.includes("sex") || profileData.childSafe == 1 && string.includes("gore") || profileData.childSafe == 1 && string.includes("suicide") || profileData.childSafe == 1 && string.includes("hentai") || profileData.childSafe == 1 && string.includes("guro") || profileData.childSafe == 1 && string.includes("porn")){
			interaction.reply("you are a child, don't lookt this up")
		}else{
		await interaction.reply(`https://www.reddit.com/r/${string}/`);
		}
	},
};
//https://www.reddit.com/r/${string}/