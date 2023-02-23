const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('use !DB to use the currency commands!')
		.addStringOption(option =>
            option.setName('category')
                .setDescription('The rob category')
                .setRequired(true)
                .addChoice('fun commands', 'fcom')
                .addChoice('currency commands', 'ccom')
                .addChoice('mod only commands (WIP)', 'moc')
                .addChoice('other commands', 'oc')),
	async execute(interaction){
		const string = interaction.options.getString('category')
		if(string == 'fcom'){
		interaction.reply("dab, wiki, reddit, facereveal, cookie"); 
		}else if(string == 'ccom'){
		interaction.reply("rob(user), sell, work, shop, rep, profile, fish, dep, db, community-service, childmode, buy, beg, bal");
		}else if(string == 'moc'){
		interaction.reply("N/A");
		}else if(string == 'oc'){
		interaction.reply("ping,");
		}
    }
}
