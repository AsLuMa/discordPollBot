import {SlashCommandBuilder} from 'discord.js';

export const editpollCommand  = {
    data: new SlashCommandBuilder()
        .setName('editpoll')
        .setDescription('Didya goof when you made your poll? Have no fear, edit functionality is here!'),
    async execute(interaction) {
        await interaction.reply('Sure would be nice if this did anything!')
    },
};
