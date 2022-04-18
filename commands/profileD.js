const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('shows your stats!'),
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
                cohead: 0,
                copens: 0,
                noba: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }
    interaction.reply('hope you are enjoying the bot!')
    if(profileData.robbing == 1 && profileData.childSafe == 1){
        const embed1 = new MessageEmbed()
        .setTitle('your balace!')
        .setColor('#b499a1')
        .addFields(
            {name: "coin balance", value: `${profileData.coins}`},
            {name: "bank balance", value: `${profileData.bank}`},
            {name: "robbing", value: "on"},
            {name: "child mode", value: "on"},
            {name: "head coolers", value: `${profileData.cohead}`},
            {name: "coloring pens", value: `${profileData.copens}`},
            {name: "bank notes", value: `${profileData.noba}`},        
        )
        interaction.channel.send({ embeds: [embed1] });
    }else if(profileData.robbing == 0 && profileData.childSafe == 1){
        const embed1 = new MessageEmbed()
        .setTitle('your balace!')
        .setColor('#b499a1')
        .addFields(
            {name: "coin balance", value: `${profileData.coins}`},
            {name: "bank balance", value: `${profileData.bank}`},
            {name: "robbing", value: "off"},
            {name: "child mode", value: "on"},       
            {name: "head coolers", value: `${profileData.cohead}`},
            {name: "coloring pens", value: `${profileData.copens}`},
            {name: "bank notes", value: `${profileData.noba}`}, 
        )
        interaction.channel.send({ embeds: [embed1] });
    }else if(profileData.robbing == 1 && profileData.childSafe == 0){
        const embed1 = new MessageEmbed()
        .setTitle('your balace!')
        .setColor('#b499a1')
        .addFields(
            {name: "coin balance", value: `${profileData.coins}`},
            {name: "bank balance", value: `${profileData.bank}`},
            {name: "robbing", value: "on"},
            {name: "child mode", value: "off"},
            {name: "head coolers", value: `${profileData.cohead}`},
            {name: "coloring pens", value: `${profileData.copens}`},
            {name: "bank notes", value: `${profileData.noba}`}, 
        )
        interaction.channel.send({ embeds: [embed1] });
    }else{
        const embed1 = new MessageEmbed()
        .setTitle('your balace!')
        .setColor('#b499a1')
        .addFields(
            {name: "coin balance", value: `${profileData.coins}`},
            {name: "bank balance", value: `${profileData.bank}`},
            {name: "robbing", value: "off"},
            {name: "child mode", value: "on"},
            {name: "head coolers", value: `${profileData.cohead}`},
            {name: "coloring pens", value: `${profileData.copens}`},
            {name: "bank notes", value: `${profileData.noba}`}, 
        )
        interaction.channel.send({ embeds: [embed1] });
    };
    }
}