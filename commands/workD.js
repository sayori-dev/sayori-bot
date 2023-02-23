const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');
const { work } = require('../models/shopInfo.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('work')
		.setDescription('All work options in one command :O')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The rob category')
                .setRequired(true)
                .addChoice('work', 'monz')
                .addChoice('work list', 'wl')
                .addChoice('work as a coder', 'codr')
                .addChoice('work an office job', 'ofj')
                .addChoice('work as a police officer', 'pof')
                .addChoice('work as an application designer', 'apd')),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });

    const string = interaction.options.getString('category')
    if(string == 'codr' && profileData.crime < 1.5 && profileData.level >= 5 && profileData.work == 0){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            work: 1
            }
    
        }
    ); 
    interaction.reply("you now work as a coder!"); 
    }else if(string == 'ofj' && profileData.crime <2.5 && profileData.level >= 1 && profileData.work == 0){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            work: 2
            }
    
        }
    ); 
    interaction.reply("you now work an boring office job!");
    }else if(string == 'pof' && profileData.crime == 0 && profileData.level >= 4 && profileData.work == 0){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            work: 3
            }
    
        }
    ); 
    interaction.reply("you are now a police officer!");
    }else if(string == 'apd' && profileData.crime == 0 && profileData.level >= 6 && profileData.work == 0){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            work: 4
            }
    
        }
    ); 
    interaction.reply("you now work as a application designer");
    }else if(string == 'monz'){
        if(profileData.work == 1){
            await profileModel.findOneAndUpdate(        {
                userID: interaction.member.id
                },
                {
                $inc: {
                coins: 1540,
                level: 0.125,
                }
        
            }
        );
        interaction.reply("you just worked for an hour and got 1540 coins!");
        }else if(profileData.work == 2){
            await profileModel.findOneAndUpdate(        {
                userID: interaction.member.id
                },
                {
                $inc: {
                coins: 1000,
                level: 0.125,
                }
        
            }
        );
        interaction.reply("you just worked for an hour and got 1000 coins!");
        }else if(profileData.work == 3){
            await profileModel.findOneAndUpdate(        {
                userID: interaction.member.id
                },
                {
                $inc: {
                coins: 1400,
                level: 0.125,
                }
        
            }
        );
        interaction.reply("you just worked for an hour and got 1400 coins!");
        }else if(profileData.work == 4){
            await profileModel.findOneAndUpdate(        {
                userID: interaction.member.id
                },
                {
                $inc: {
                coins: 1780,
                level: 0.125,
                }
        
            }
        );
        interaction.reply("you just worked for an hour and got 1780 coins!");
        }else if(profileData.work == 0){
         interaction.reply("you dont have a job yet :sob: (to get reputation at first i heard helping the community works!)");
        }
    }else if(string == 'wl'){
        const embed1 = new MessageEmbed()
        .setTitle('Work for people~')
        .setColor('#b499a1')
        .addFields(
            {name: "programmmer/coder", value: `trust needed: ${work.coder.level} crime level needed: ${work.coder.crime} amount you make ${work.coder.amount}`},
            {name: "office job", value: `trust needed: ${work.office_job.level} crime level needed: ${work.office_job.crime} amount you make ${work.office_job.amount}`},
            {name: "police officer", value: `trust needed: ${work.police_officer.level} crime level needed: ${work.police_officer.crime} amount you make ${work.police_officer.amount}`},
            {name: "Application designer", value: `trust needed: ${work.application_designer.level} crime level needed: ${work.application_designer.crime} amount you make ${work.application_designer.amount}`},
        )
        interaction.reply("omor");
        interaction.deleteReply();
        interaction.channel.send({ embeds: [embed1] });
    }else{
        interaction.reply("you are probably already working!");
    }

    }
} 