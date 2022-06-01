const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sell')
		.setDescription('lets you sell items!')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The rob category')
                .setRequired(true)
                .addChoice('animals', 'ams')
                .addChoice('fish', 'fsh')),
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
                animal: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }

    const string = interaction.options.getString('category')
    if(string == 'fsh' && profileData.fish > '0'){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            coins: 50,
            fish: -1,
            }
    
        }
    );
    const fiss = profileData.fish - 1
    const cons = profileData.coins + 50
    interaction.reply(`you sold one fish now you have ${fiss} fishes and ${cons} coins!`)
    }else if(string == 'ams' && profileData.animal > '0'){
        await profileModel.findOneAndUpdate(        {
            userID: interaction.member.id
            },
            {
            $inc: {
            coins: 70,
            animal: -1,
            }
    
        }
    );
    const amd = profileData.animal - 1
    const cons = profileData.coins + 70
    interaction.reply(`you sold one animal now you have ${amd} animals and ${cons} coins!`)
    }else{
        interaction.reply("you cant sell that / you dont have that :thinking:")
    }
    }
}
