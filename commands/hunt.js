const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hunt')
		.setDescription('hunt for animals'),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });

if(profileData.rgun > 0){
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        animal: 1,
        }

    }
);
interaction.reply(`you caught an animal!`);
}else{
    interaction.reply("you dont have a hunting rifle");
}
}
}