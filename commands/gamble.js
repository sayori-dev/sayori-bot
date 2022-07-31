const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gamble')
		.setDescription("let's see how lucky you are!")
        .addNumberOption(option => option.setName('num').setDescription('Enter a number')
        .setRequired(true)),
	async execute(interaction){
        const amount = interaction.options.getNumber('num');
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });

    if(amount > profileData.coins) return interaction.reply("you dont have enough coins")
    const real = Math.floor(Math.random() * 40) +1;
    const fake = Math.floor(Math.random() * 30) +1;
    
    if(real < fake){
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        coins: -amount,
        }
    
    }
    );
    interaction.reply(`you lost ${amount} of coins`);
}else{
    const amuont = amount * 1.1
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        coins: amuont,
        }
    
    }
    );
    interaction.reply(`you won ${amuont} of coins`);
}

    }
} 
