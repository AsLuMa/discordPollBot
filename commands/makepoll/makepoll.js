const { SlashCommandBuilder, EmbedBuilder, Emoji} = require('discord.js');
// button related imports
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

// todo: avoid hardcoding of options = making this input-based means being able to deal with null values
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

        let game = interaction.options.getString('game')
        let dato1 = interaction.options.getString('dato1')
        let dato2 = interaction.options.getString('dato2')
        let dato3 = interaction.options.getString('dato3')
        let dato4 = interaction.options.getString('dato4')


        if (game === null) {
            game = "spill";
        }

        const dates = [dato1, dato2, dato3, dato4]

        // const emojis = [':rice_scene:', ':tada:', ':game_die:', ':baby_chick:'];

        const emojis = [];

        emojis.push({emojiName: ':rice_scene:', unicode: "\uD83C\uDF91"})
        emojis.push({emojiName: ':tada:', unicode: "\uD83C\uDF89"})
        emojis.push({emojiName: ':baby_chick:', unicode: "\uD83D\uDC24"})
        emojis.push({emojiName: ':game_die:', unicode: "\uD83C\uDFB2"})

        console.log(emojis);


        const fields = [];
        for (let i = 0; i < 4; i++) {
            if (dates[i] !== null) {
                let field;
                field = {
                    name: dates[i],
                    value: emojis[i].emojiName,
                    inline: false
                };
                fields.push(field);
            }
            else {
                console.log("This should be a properly handled error.")
            }

        }

        console.log(fields)

        await interaction.reply({ content: `Eg vil spille ${game}`, ephemeral: true } )

        const pollWindow = new EmbedBuilder()
            .setDescription(`Når kan du spille ${game}?`)
            // .setURL('https://discord.js.org')
            .setDescription(`Når passer det for deg å spille ${game}?`)
            .addFields(fields)
            .setFooter({ text: 'Gå ut å ta på gress innimellom.'});

        // embed with buttons
        // interaction.channel.send( { embeds: [pollWindow], ephemeral:true, components: [row]} )

        //embed that autoreplies with emoji for person who makes embed
        //todo parse emojis properly instead of hardcoding
        interaction.channel.send( { embeds: [pollWindow], ephemeral:true } ).then(embedMessage => {
            if(dato1 !== null) {
                embedMessage.react("🎑");
            }
            if(dato2 !== null) {
                embedMessage.react("🎉");
            }
            if(dato3 !== null) {
                embedMessage.react("🐤");
            }
            if(dato4 !== null) {
                embedMessage.react("🎲");
            }

        })

        //standard/default embed
        // interaction.channel.send( { embeds: [pollWindow], ephemeral:true } )
    },

};
