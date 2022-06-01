const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fish')
		.setDescription('fish for items and fish'),
	async execute(interaction){
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
                crime: 0,
                work: 0,
                level: 0,
                cohead: 0,
                copens: 0,
                noba: 0,
                frod: 0,
                rgun: 0,
                fish: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
if(profileData.frod > 0){
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        fish: 1
        }

    }
);
await interaction.reply("you fished and got a fish :D");
}else
await interaction.reply("get a fishing rob bozo");
    }
} 