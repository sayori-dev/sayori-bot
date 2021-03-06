const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');
const { items } = require('../models/shopInfo.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buy')
		.setDescription('lets you buy items')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The rob category')
                .setRequired(true)
                .addChoice('head cooler', 'cohead')
                .addChoice('colored pens', 'copens')
                .addChoice('bank notes', 'noba')
                .addChoice('fishing rod', 'frod')
                .addChoice('hunting rifle', 'hrif')),
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
    if(string == 'cohead' && profileData.coins > '410'){
        const response = await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: -410,
                cohead: 1,

            },
        },
    );
    const cohed = (profileData.cohead + 1)
    interaction.reply(`thanks for buying this item, and you now own ${cohed} of this item`)
    }else if(string == 'copens' && profileData.coins > '200'){
        const response = await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: -200,
                copens: 1,

            },
        },
    );
    const copen = (profileData.copens + 1)
    interaction.reply(`thanks for buying this item, and you now own ${copen} of this item`);
    }else if(string == 'noba' && profileData.coins > '10000'){
        const response = await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: -200,
                noba: 1,

            },
        },
    );
    const noab = (profileData.noba + 1)
    interaction.reply(`thanks for buying this item, and you now own ${noab} of this item`);
    }else if(string == 'frod' && profileData.coins > '300'){
        const response = await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: -300,
                frod: 1,

            },
        },
    );
    const frod = (profileData.frod + 1)
    interaction.reply(`thanks for buying this item, and you now own ${frod} of this item`)
    }else if(string == 'hrif' && profileData.coins > '350'){
        const response = await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: -300,
                rgun: 1,

            },
        },
    );
    const hrif = (profileData.rgun + 1)
    interaction.reply(`thanks for buying this item, and you now own ${hrif} of this item`)
    }else{
    interaction.reply(`you dont have enough money for the item`);
    }
}
}