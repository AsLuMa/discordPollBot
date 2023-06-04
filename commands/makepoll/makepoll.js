const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming'),
    async execute(interaction) {
        await interaction.reply('Nice placeholder text')
    },
};
