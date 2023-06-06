const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming - the one that works')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('Name of game')),
    async execute(interaction) {
        const game = interaction.options.getString('game')
        await interaction.reply({content: `Here's hoping this outputs what you typed: ${game}`, ephemeral: false});

        const pollWindow = new EmbedBuilder()
            .setDescription(`Når kan du spille ${game}?`)
            .setURL('https://discord.js.ord')
            .setDescription('This should probably be an explanation of how to vote? Idk.')
            .addFields({ name: 'This is where the poll options should live.', value: 'Some more stuff' })
            .setFooter({ text: 'Some profound text goes here. Or not.'});

        interaction.channel.send( { embeds: [pollWindow]} )
    },

};
