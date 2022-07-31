const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fish')
		.setDescription('fish for items and fish'),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });


if(profileData.frod > 0){
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        fish: 1
        }

    }
);
await interaction.reply("you fished and got a fish :D");
}else
await interaction.reply("get a fishing rob bozo");
    }
} 