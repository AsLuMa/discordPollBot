import {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder} from 'discord.js';

export const fancyPollCommand = {
    data: new SlashCommandBuilder()
        .setName('fancypoll')
        .setDescription('Fancy poll with buttons ' + "\u2728"),

    async execute(interaction){
        await interaction.reply('This will surely be the fanciest poll ' + "\u2728" )

        function makeButton(number) {
            return new ButtonBuilder()
                .setCustomId(`Option ${number + 1}`)
                .setLabel(`Alternativ ${number + 1}`)
                .setStyle(ButtonStyle.Primary);
        }

        let buttons = []

        for (let i = 0; i < 4; i++ ){
            const button = makeButton(i)
            buttons.push(button)
        }
// console.log(`buttons ${buttons}`)

        const row = new ActionRowBuilder()
        for (let i = 0; i < buttons.length; i++){
            const button = buttons[i]
            row.addComponents(button);
        }

        // const pollWindow = new EmbedBuilder()
        //     .setDescription(`Some content goes here?`);


    // embed with buttons
    // interaction.channel.send( { embeds: [pollWindow], ephemeral:true, components: [row]} );
    interaction.channel.send( { ephemeral:true, components: [row]} );

    },



}



