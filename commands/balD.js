const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bal')
		.setDescription('Replies with your balance!'),
	async execute(interaction) {
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
                cohead: 0,
                copens: 0,
                noba: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }		
            const embed1 = new MessageEmbed()
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