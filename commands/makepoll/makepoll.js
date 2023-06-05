const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming - the one that works')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('Name of game')),
    async execute(interaction) {
        const game = interaction.options.getString('game')
        await interaction.reply(`Here's hoping this outputs what you typed: ${game}`);
    },
};
