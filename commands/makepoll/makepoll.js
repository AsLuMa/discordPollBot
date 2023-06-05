const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('input')),
    async execute(interaction) {
        const input = interaction.options.getString('input')
       // await interaction.reply({ content: 'Nice placeholder text', ephemeral: true })
        await interaction.reply(`Here's hoping this outputs what you typed: ${input}`);
    },
};
