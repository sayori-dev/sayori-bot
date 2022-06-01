const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('db')
		.setDescription('connects you to the db!'),
	async execute(interaction){
let profile = await profileModel.create({
    userID: interaction.member.id,
                serverID: interaction.guild.id,
                coins: 1000,
                bank: 0,
                robbing: 1,
                childSafe: 0,
                crime: 0,
                work: 0,
                level: 0,
                cohead: 0,
                copens: 0,
                noba: 0,
                frod: 0,
                rgun: 0,
                fish: 0,
                animal: 0,
});
profile.save();
        interaction.reply("you've now been added to the DB. Thank you so much!");
    }
}