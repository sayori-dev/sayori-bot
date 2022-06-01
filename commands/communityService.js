const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('community-service')
		.setDescription('lets you make your crime less!'),
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
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
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