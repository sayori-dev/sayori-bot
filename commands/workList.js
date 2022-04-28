const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { work } = require('../models/shopInfo.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('worklist')
		.setDescription('Lists all the work places'),
	async execute(interaction){
        const embed1 = new MessageEmbed()
        .setTitle('Work for people~')
        .setColor('#b499a1')
        .addFields(
            {name: "programmmer/coder", value: `level needed: ${work.coder.level} crime level needed: ${work.coder.crime} amount you make ${work.coder.amount}`},
            {name: "office job", value: `level needed: ${work.office_job.level} crime level needed: ${work.office_job.crime} amount you make ${work.office_job.amount}`},
            {name: "police officer", value: `level needed: ${work.police_officer.level} crime level needed: ${work.police_officer.crime} amount you make ${work.police_officer.amount}`},
            {name: "Application designer", value: `level needed: ${work.application_designer.level} crime level needed: ${work.application_designer.crime} amount you make ${work.application_designer.amount}`},
        )
        interaction.reply("omor");
        interaction.deleteReply();
        interaction.channel.send({ embeds: [embed1] });
    }
}