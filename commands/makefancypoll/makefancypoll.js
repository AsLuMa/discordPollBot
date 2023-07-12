const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fancypoll')
        .setDescription('Fancy poll with buttons ' + "\u2728"),

    async execute(interaction){
        await interaction.reply('This will surely be the fanciest poll ' + "\u2728" )
    }

}

// function makeButton(number) {
//     button = new ButtonBuilder()
//         .setCustomId(`Option ${number+1}`)
//         .setLabel(`Alternativ ${number+1}`)
//         .setStyle(ButtonStyle.Primary)
//     return button;
// }
//
// let buttons = []
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

// embed with buttons
// interaction.channel.send( { embeds: [pollWindow], ephemeral:true, components: [row]} )
