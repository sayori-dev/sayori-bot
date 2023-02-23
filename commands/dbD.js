const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('db')
		.setDescription('connects you to the db!'),
	async execute(interaction){
        let profileData;
        try {
            profileData = await profileModel.findOne({ userID: interaction.member.id });
            if (!profileData) {
                let profile = await profileModel.create({
                    userID: interaction.member.id,
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
                    phone: 0,
                    trophy: 0,
                    pet: 0,
                    ads: 0

                });
                profile.save();
            }else {
                interaction.reply("you've already been added! thanks to much!")
            }
        }catch(err) {
            console.log(err);
        }
        interaction.reply("you've now been added to the DB. Thank you so much!");
    }
}