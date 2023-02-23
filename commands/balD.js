const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bal')
		.setDescription('Replies with your balance!'),
	async execute(interaction) {
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });		
        const embed1 = new EmbedBuilder()
            .setTitle('your balace!')
            .setColor('#b499a1')
            .addFields(
                {name: "coin balance", value: `${profileData.coins}`},
                {name: "bank balance", value: `${profileData.bank}`},
            )
           interaction.reply("omor");
           interaction.deleteReply();
           interaction.channel.send({ embeds: [embed1] });
	},
};