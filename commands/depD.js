const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deposit')
		.setDescription('deposit an amount to your bank!')
        .addNumberOption(option => option.setName('num').setDescription('Enter a number')
        .setRequired(true)),
	async execute(interaction){
        const number = interaction.options.getNumber('num');
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });
        
    if(number > profileData.coins){
        interaction.reply("you dont have this much coins");
    }else{
        interaction.reply(`you now have ${number} coin(s) in your bank`);
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            coins: -number,
            bank: number,
            }
    
        }
    );
}
    }
}