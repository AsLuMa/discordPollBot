const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
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

        const game = interaction.options.getString('game')
        let dato1 = interaction.options.getString('dato1')
        let dato2 = interaction.options.getString('dato2')
        let dato3 = interaction.options.getString('dato3')
        let dato4 = interaction.options.getString('dato4')

        const dates = [dato1, dato2, dato3, dato4];

        const emojis = [':metal:', ':tada:', ':game_die:', ':baby_chick:'];

        // let dates = new Array(dato1, dato2, dato3, dato4)

        // TODO abandonded button project
        // function makeButton(number) {
        //     button = new ButtonBuilder()
        //         .setCustomId(`Option ${number+1}`)
        //         .setLabel(`Alternativ ${number+1}`)
        //         .setStyle(ButtonStyle.Primary)
        //     return button;
        // }
        //
        // let buttons = []
        // //todo don't hardcode this
        //
        // for (let i = 0; i < 4; i++ ){
        //     const button = makeButton(i)
        //     buttons.push(button)
        // }
        // // console.log(`buttons ${buttons}`)
        //
        // const row = new ActionRowBuilder()
        //     for (let i = 0; i < buttons.length; i++){
        //         button = buttons[i]
        //         row.addComponents(button);
        //     }


        const fields = [];
        for (let i = 0; i < 4; i++) {
            if (dates[i] !== null) {
                let field;
                field = {
                    name: dates[i],
                    value: emojis[i],
                    inline: false
                };
                fields.push(field);
            }
            else {
                console.log("You shouldn't be here, and this should be a properly handled error.")
            }

        }

        console.log(fields)

        await interaction.reply({ content: `Eg vil spille ${game}`, ephemeral: true } )

        // await interaction.followUp({ content: `Her kjem ein liten (foreløpig) automatisk oppfølginsrespons: ${dato1} `, ephemeral: true })

        const pollWindow = new EmbedBuilder()
            .setDescription(`Når kan du spille ${game}?`)
            // .setURL('https://discord.js.org')
            .setDescription(`Når passer det for deg å spille ${game}?`)
            .addFields(fields)
            .setFooter({ text: 'Gå ut å ta på gress innimellom.'});

        // embed with buttons
        // interaction.channel.send( { embeds: [pollWindow], ephemeral:true, components: [row]} )

        //embed that autoreplies with emoji for person who makes embed
        // interaction.channel.send( { embeds: [pollWindow], ephemeral:true } ).then(embedMessage => {
        //     embedMessage.react("🤘");
        //     embedMessage.react("🎲");
        //     embedMessage.react("🎉");
        //     embedMessage.react("🐤");
        // })

        //standard/default embed
        interaction.channel.send( { embeds: [pollWindow], ephemeral:true } )
    },

};
