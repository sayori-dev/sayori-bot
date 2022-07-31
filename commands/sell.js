const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sell')
		.setDescription('lets you sell items!')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The rob category')
                .setRequired(true)
                .addChoice('animals', 'ams')
                .addChoice('fish', 'fsh')),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });

    const string = interaction.options.getString('category')
    if(string == 'fsh' && profileData.fish > '0'){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            coins: 50,
            fish: -1,
            }
    
        }
    );
    const fiss = profileData.fish - 1
    const cons = profileData.coins + 50
    interaction.reply(`you sold one fish now you have ${fiss} fishes and ${cons} coins!`)
    }else if(string == 'ams' && profileData.animal > '0'){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            coins: 70,
            animal: -1,
            }
    
        }
    );
    const amd = profileData.animal - 1
    const cons = profileData.coins + 70
    interaction.reply(`you sold one animal now you have ${amd} animals and ${cons} coins!`)
    }else{
        interaction.reply("you cant sell that / you dont have that :thinking:")
    }
    }
}
