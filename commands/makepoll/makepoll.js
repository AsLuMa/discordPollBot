const { SlashCommandBuilder, EmbedBuilder, Message} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('Name of game')),
    async execute(interaction) {
        const game = interaction.options.getString('game')

        await interaction.reply({ content: `Eg vil spille ${game}`, fetchReply:true, ephemeral: true } )

        await interaction.followUp('Her kjem ein liten (foreløpig) automatisk oppfølginsrespons.')
        // input available dates

        const pollWindow = new EmbedBuilder()
            .setDescription(`Når kan du spille ${game}?`)
            // .setURL('https://discord.js.org')
            .setDescription('This should probably be an explanation of how to vote? Idk.')
            .addFields({ name: '1.', value: 'Måndag er best, ingen protest.' })
            .setFooter({ text: 'Gå ut å ta på gress.'});

        interaction.channel.send( { embeds: [pollWindow], ephemeral:true} )


    },



};
