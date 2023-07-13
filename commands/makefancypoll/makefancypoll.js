import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder as MessageEmbed,
    EmbedBuilder, hideLinkEmbed, Message,
    SlashCommandBuilder
} from 'discord.js';
import 'node:timers/promises';

export function makeButton(buttonId, name, buttonStyle) {
    return new ButtonBuilder()
        .setCustomId(buttonId)
        .setLabel(name)
        .setStyle(buttonStyle);
}

export const fancyPollCommand = {
    data: new SlashCommandBuilder()
        .setName('fancypoll')
        .setDescription('Fancy poll with buttons ' + "\u2728")
        .addStringOption(date1 =>
            date1.setName('game')
                .setDescription('What do you want to play?')),

    async execute(interaction){
        // await interaction.reply({ content: 'This will surely be the fanciest poll ' + "\u2728", ephemeral: true}  )

        const makePollButton = makeButton('makePoll', 'Start making poll!', ButtonStyle.Primary);

        const firstMessageRow = new ActionRowBuilder();
        firstMessageRow.addComponents(makePollButton);

        // todo deferReply()
        await interaction.reply( {content: 'At some point there will be a fancy description of how to make the poll here'} );

        interaction.channel.send( { components: [firstMessageRow] } );


        // const pollWindow = new MessageEmbed()
        //     .setDescription(`Todo:
        // - add click listener to make poll button \n
        // - this starts a loop of asking user for input/dates \n
        // - make embed with the actual poll, and send it \n
        // - make logic for editing poll. Availabilities will change`);
        //
        // const embedEditRow = new ActionRowBuilder();
        // embedEditRow.addComponents(editButton);
        //
        //
        // interaction.channel.send( { embeds: [pollWindow], ephemeral:true }, makePollButton );
        // interaction.channel.send( { components: [embedEditRow], ephemeral:true }, makePollButton );



        //
        // const doneEditingRow = new ActionRowBuilder();
        // doneEditingRow.addComponents(doneEditingButton);
        //
        // const editPlaceholder = new MessageEmbed()
        //     .setDescription("This will at some point be an edit function. Probably.")
        //
        // interaction.channel.send({ embeds: [editPlaceholder], ephemeral:true });
        // interaction.channel.send({ components: [doneEditingRow], ephemeral:true });

    },



}



