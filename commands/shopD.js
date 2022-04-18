const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');
const { items } = require('../models/shopInfo.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shop')
		.setDescription('Shows what you can buy'),   
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
                cohead: 0,
                copens: 0,
                noba: 0,
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }

    const embed1 = new MessageEmbed()
    .setTitle('buy things!')
    .setColor('#b499a1')
    .addFields(
        {name: "head cooler", value: `${items.coolhead}`},
        {name: "colored pens", value: `${items.colored_pens}`},
        {name: "bank note", value: `${items.bank_note}`},
    )
    interaction.reply("omor");
    interaction.deleteReply();
    interaction.channel.send({ embeds: [embed1] });
    }
}