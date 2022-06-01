const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');
const { off } = require('../models/profileSchema');


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

    const funny = profileData.childSafe === 1 ? 'on' : 'off'
    const funny1 = profileData.robbing === 1 ? 'on' : 'off'

        const embed1 = new MessageEmbed()
        .setTitle('your balace!')
        .setColor('#b499a1')
        .addFields(
            {name: "coin balance", value: `${profileData.coins}`},
            {name: "bank balance", value: `${profileData.bank}`},
            {name: "robbing", value: `${funny1}`},
            {name: "child mode", value: `${funny}`},
            {name: "crime", value: `${profileData.crime}`},
            {name: "head coolers", value: `${profileData.cohead}`},
            {name: "coloring pens", value: `${profileData.copens}`},
            {name: "bank notes", value: `${profileData.noba}`}, 
            {name: "fishing rods", value: `${profileData.frod}`},     
            {name: "hunting guns", value: `${profileData.rgun}`},     
            {name: "fish", value: `${profileData.fish}`},      
            {name: "animals", value: `${profileData.animal}`},    

        )
        interaction.channel.send({ embeds: [embed1] });
    }
}