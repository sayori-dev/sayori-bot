const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { EmbedBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('shows your stats!'),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });

    const funny = profileData.childSafe === 1 ? 'on' : 'off'
    const funny1 = profileData.robbing === 1 ? 'on' : 'off'

    const embed1 = new EmbedBuilder()
        .setTitle('Your profile!')
        .setColor('#b499a1')
        .addFields(
            {name: "Coin balance", value: `${profileData.coins}`},
            {name: "Bank balance", value: `${profileData.bank}`},
            {name: "Robbing", value: `${funny1}`},
            {name: "Child mode", value: `${funny}`},
            {name: "Crime", value: `${profileData.crime}`},
            {name: "Head coolers", value: `${profileData.cohead}`},
            {name: "Coloring pens", value: `${profileData.copens}`},
            {name: "Bank notes", value: `${profileData.noba}`}, 
            {name: "Fishing rods", value: `${profileData.frod}`},     
            {name: "Hunting guns", value: `${profileData.rgun}`},     
            {name: "Fish", value: `${profileData.fish}`},      
            {name: "Animals", value: `${profileData.animal}`},
            {name: "Trophies", value: `${profileData.trophy}`},
            {name: "Reputation", value: `${profileData.level}`}

        )
        interaction.channel.send({ embeds: [embed1] });
    }
}