const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { items } = require('../models/shopInfo.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shop')
		.setDescription('Shows what you can buy'),   
	async execute(interaction){
    const embed1 = new MessageEmbed()
    .setTitle('buy things!')
    .setColor('#b499a1')
    .addFields(
        {name: "head cooler", value: `${items.coolhead}`},
        {name: "colored pens", value: `${items.colored_pens}`},
        {name: "bank note", value: `${items.bank_note}`},
    )
    interaction.reply("omor");
    interaction.deleteReply();
    interaction.channel.send({ embeds: [embed1] });
    }
}