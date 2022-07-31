const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('community-service')
		.setDescription('lets you make your crime less!'),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });

    const real = Math.floor(Math.random() * 40) +1;

    if(profileData.crime == 0 || profileData.crime == 0 && real < 10 && profileData.level < 1){
        if(real < 10 && profileData.level < 1){
            await profileModel.findOneAndUpdate(        {
                userID: interaction.member.id  
            },
            {
                $inc: {
                level: 1,
                }
             
            }
            ); 
            interaction.reply("you got some reputation :D");
        }else{return interaction.reply(`you are as clean as you can be ${real}`);}
    }else if(real < 19){return interaction.followUp("you tried to do community service, but it didnt help");
    }else{
await profileModel.findOneAndUpdate(        {
    userID: interaction.member.id  
},
{
    $inc: {
    crime: -0.5,
    }
 
}
); 
const crim = profileData.crime -0.5
await interaction.reply(`your crime is now ${crim}`);
    }
    }
}