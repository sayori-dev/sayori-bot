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
                .addChoice('head cooler', 'head cooler')
                .addChoice('colored pens', 'colored pens')
                .addChoice('bank notes', 'bank notes')
                .addChoice('fishing rod', 'fishing rod')
                .addChoice('hunting rifle', 'hunting rifle')
                .addChoice('phone', "phone")
                .addChoice('trophy', 'trophy')),
	async execute(interaction){
        let profileData;
        profileData = await profileModel.findOne({ userID: interaction.member.id });
    
    const string = interaction.options.getString('category')
    if(string == 'head cooler' && profileData.coins > '410'){
        await profileModel.findOneAndUpdate({
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
    }else if(string == 'colored pens' && profileData.coins > '200'){
        await profileModel.findOneAndUpdate({
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
    }else if(string == 'bank notes' && profileData.coins > '10000'){
        await profileModel.findOneAndUpdate({
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
    }else if(string == 'fishing rod' && profileData.coins > '300'){
        await profileModel.findOneAndUpdate({
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
    }else if(string == 'hunting rifle' && profileData.coins > '350'){
        await profileModel.findOneAndUpdate({
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
    }else if(string == 'phone' && profileData.coins > '1500'){
        await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: -1500,
                phone: 1,

            },
        },
    );
    const ph = (profileData.phone + 1)
    interaction.reply(`thanks for buying this item, and you now own ${ph} of this item`)
    }else if(string == 'trophy' && profileData.coins > `${items.Achievments.trophy}`){
        await profileModel.findOneAndUpdate({
            userID: interaction.member.id           
        }, 
        {
            $inc: {
                coins: `${items.Achievments.trophy}`,
                trophy: 1,

            },
        },
    );
    const tr = (profileData.trophy + 1)
    interaction.reply(`thanks for buying this item, and you now own ${tr} of ${string}`)
    }else{
    interaction.reply(`you dont have enough money for a ${string}`);
    }
}
}