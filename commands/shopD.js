const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { items } = require('../models/shopInfo.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shop')
		.setDescription('Shows what you can buy'),   
	async execute(interaction){
    const embed1 = new MessageEmbed()
    .setTitle('Buy things!')
    .setColor('#b499a1')
    .addFields(
        {name: "Head cooler", value: `${items.coolhead}`},
        {name: "Colored pens", value: `${items.colored_pens}`},
        {name: "Bank note", value: `${items.bank_note}`},
        {name: "Fishing rod", value: `${items.huntingEtc.fishing_rod}`},
        {name: "Hunting rifle", value: `${items.huntingEtc.hunt_rifle}`},
        {name: "Phone", value: `${items.phone}`},
        {name: "Trophy", value: `${items.Achievments.trophy}`}
    )
    interaction.reply("Hope you like the bot!");
    interaction.channel.send({ embeds: [embed1] });
    }
}