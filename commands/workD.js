const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('work')
		.setDescription('work for your money!'),
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
            });
            profile.save();
        }
    }catch(err) {
        console.log(err);
    }

if(profileData.work == 1){
    await profileModel.findOneAndUpdate(        {
        userID: interaction.member.id
        },
        {
        $inc: {
        coins: 1540,
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
        }

    }
);
interaction.reply("you just worked for an hour and got 1780 coins!");
}else if(profileData.work == 0){
 interaction.reply("you dont have a job yet :sob:");
}
    }
} 