const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const profileModel = require("../models/profileSchema");
const amount = 1

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rob_false')
		.setDescription('turns off robbing'),
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
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
if (profileData.robbing > 0) { 
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        robbing: -amount,
        }

    }
);
return interaction.reply("done!")
} else {
    interaction.reply("it's already off")
}

    }
}
