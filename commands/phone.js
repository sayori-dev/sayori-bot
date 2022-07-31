const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed, Channel, Integration, Interaction } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('phone')
		.setDescription('THIS IS A WIP')
        .addUserOption(option => option.setName('target').setDescription('Select a user to dm')
        .setRequired(true))
        .addStringOption(option => option.setName('input').setDescription('enter what you want to DM them!!!')
        .setRequired(true)),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });


    var channel = interaction.options.getUser('target');
    const string = interaction.options.getString('input');
    if(profileData.phone < 0){
        interaction.reply("you dont own a phone yet D: :troll~1:");
    }if(channel == 952642217573490748){
        interaction.reply("you cant let the bot talk to itself");
    }else { 
        interaction.reply("done!")
        channel.send(`${string}`)
    }
    }
} 