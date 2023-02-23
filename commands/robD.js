const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const profileModel = require("../models/profileSchema");
const amount = 1

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rob')
		.setDescription('turns off/on robbing')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The rob category')
                .setRequired(true)
                .addChoice('on', 'turns it on')
                .addChoice('off', 'turns it off')),
				async execute(interaction){
                    try{
                    const string = interaction.options.getString('category')
					if(string === 'turns it off'){
                        let profileData;
                        profileData = await profileModel.findOne({ userID: interaction.member.id });
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
                    return interaction.reply("done!");
                    } else {
                        interaction.reply("it's already off");
                    }
					}else if(string == 'category', 'on'){
						let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });
   
if (profileData.robbing < 1) { 
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        robbing: amount,
        }

    }
);
return interaction.reply("done!");
} else {
    interaction.reply("it's already on");
}
					}
                }catch(err){
                    console.log(err)
                }					
				},
}