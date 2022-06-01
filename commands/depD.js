const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deposit')
		.setDescription('deposit an amount to your bank!')
        .addNumberOption(option => option.setName('num').setDescription('Enter a number')),
	async execute(interaction){
        const number = interaction.options.getNumber('num');
        let profileData;
    try {
        profileData = await profileModel.findOne({ userID: interaction.member.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: interaction.member.id,
                serverID: interaction.guild.id,
                coins: 1000,
                bank: 0,
                robbing: 1,
                childSafe: 0,
                crime: 0,
                work: 0,
                cohead: 0,
                copens: 0,
                noba: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
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