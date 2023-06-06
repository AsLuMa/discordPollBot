const { SlashCommandBuilder, EmbedBuilder, Message} = require('discord.js');

// todo: avoid hardcoding of options
module.exports = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming')
        .addStringOption(option1 =>
            option1.setName('game')
                .setDescription('Name of game'))
        .addStringOption(option2 =>
            option2.setName('dato1')
                .setDescription('Dato 1'))
        .addStringOption(option2 =>
            option2.setName('dato2')
                .setDescription('Dato 2'))
        .addStringOption(option2 =>
            option2.setName('dato3')
                .setDescription('Dato 3'))
        .addStringOption(option =>
            option.setName('dato4')
                .setDescription('Dato 4')),
    async execute(interaction) {
        const game = interaction.options.getString('game')
        const dato1 = interaction.options.getString('dato1')
        const dato2 = interaction.options.getString('dato2')
        const dato3 = interaction.options.getString('dato3')
        const dato4 = interaction.options.getString('dato4')

        await interaction.reply({ content: `Eg vil spille ${game}`, ephemeral: true } )

        // await interaction.followUp({ content: `Her kjem ein liten (foreløpig) automatisk oppfølginsrespons: ${dato1} `, ephemeral: true })

        // input available dates
        const pollWindow = new EmbedBuilder()
            .setDescription(`Når kan du spille ${game}?`)
            // .setURL('https://discord.js.org')
            .setDescription(`Når passer det for deg å spille ${game}?`)
            .addFields(
                { name: 'Alternativ 1', value: `${dato1}` },
                { name: 'Alternativ 2', value: `${dato2}`},
                { name: 'Alternativ 3', value: `${dato3}`},
                { name: 'Alternativ 4', value: `${dato4}`},
            )
            .setFooter({ text: 'Gå ut å ta på gress.'});

        interaction.channel.send( { embeds: [pollWindow], ephemeral:true} )


    },



};
