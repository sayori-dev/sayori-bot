const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const profileModel = require("../models/profileSchema");
const amount = 1

module.exports = {
	data: new SlashCommandBuilder()
		.setName('child')
		.setDescription('turns off/on child safety')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The child category')
                .setRequired(true)
                .addChoice('on', 'turns it on')
                .addChoice('off', 'turns it off')),
				async execute(interaction){
                    try{
                    const string = interaction.options.getString('category')
					if(string === 'turns it off'){
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
                                    cohead: 0,
                                    copens: 0,
                                    noba: 0,
                                });
                                profile.save();
                            }
                        }catch(err) {
                            console.log(err);
                        }
                    if (profileData.childSafe > 0) { 
                        await profileModel.findOneAndUpdate(        {
                            userID: interaction.member.id
                            },
                            {
                            $inc: {
                            childSafe: -amount,
                            }
                    
                        }
                    );
                    return interaction.reply("done!");
                    } else {
                        interaction.reply("it's already off");
                    }
					}else if(string == 'category', 'on'){
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
                cohead: 0,
                copens: 0,
                noba: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
if (profileData.childSafe < 1) { 
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        childSafe: amount,
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