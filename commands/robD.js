const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const profileModel = require("../models/profileSchema");
const amount = 1

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rob')
		.setDescription('turns off/on robbing')
        .addSubcommand(subcommand =>
			subcommand
				.setName('on')
				.setDescription('turns robbing on'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('off')
				.setDescription('turns robbing off')),
				async execute(interaction){
					if(interaction.options.getSubcommand() == 'off'){
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
                                    cohead: 0,
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
					}else{
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
                cohead: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
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
return interaction.reply("done!")
} else {
    interaction.reply("it's already on")
}
					}					
				},
}
