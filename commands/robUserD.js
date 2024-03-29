const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('robbing')
		.setDescription('rob an user')
        .addUserOption(option => option.setName('target').setDescription('Select a user')
        .setRequired(true)),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });
    const user = interaction.options.getUser('target');
    const dotData = await profileModel.findOne({ userID: user.id});
    const amount = Math.floor(Math.random() * 50) + 1;
    if(!dotData || profileData.robbing === 0 || dotData.robbing === 0){return interaction.reply("this user doesn't exist/doesn't wanna get robbed or you dont wanna get robbed")
}else if(user.id === profileData.userID || dotData.coins < amount ){return interaction.reply("this is you! or this user doesn't have enough coins!")
}else{
      await profileModel.findOneAndUpdate(        {
        userID: user.id
        },
        {
        $inc: {
        coins: -amount,
        }

    }
);
await profileModel.findOneAndUpdate(        {
    userID: interaction.member.id  
},
{
    $inc: {
    coins: amount,
    crime: 0.5,
    }
 
}
);  
    await interaction.reply(`${interaction.member} just robbed ${user} from ${amount} coins!`);
}
    }
    }