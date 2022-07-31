const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require('../models/profileSchema');
const people = [
    "Will smith",
    "SmallishBeans",
    "Grian",
    "PewDiePie",
    "Your mom",
    "Your dad",
    "Sayori bot, wait what how she's dead. Anyway you asked her",
    "Sayori",
    "Poulpo",
    "A racoon",
    "A homeless man",
    "Your sister in law"
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beg')
		.setDescription('beg for money!'),
	async execute(interaction) {
        let profileData;
        //start random number thingy
        profileData = await profileModel.findOne({ userID: interaction.member.id });
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    await profileModel.findOneAndUpdate({
        userID: interaction.member.id           
    }, 
    {
        $inc: {
            coins: randomNumber,
        },
    }
);
//end random number thingy  
const peoples = Math.floor(Math.random() * people.length);
//end random ppl thingy
const real = Math.floor(Math.random() * 40) +1;
if(real < "19"){
    await profileModel.findOneAndUpdate({
        userID: interaction.member.id           
    }, 
    {
        $inc: {
            coins: -randomNumber,
        },
    }
);
    return interaction.reply(`${interaction.member}, You asked ${people[peoples]} but, They said "ask your brother"`);  
}else if(randomNumber == "1" ){
    return interaction.reply(`${interaction.member}, Great job you asked ${people[peoples]} for ${randomNumber} Coin`);
}else{
  return interaction.reply(`${interaction.member}, Great job you asked ${people[peoples]} for ${randomNumber} Coins`);
}
	},
};