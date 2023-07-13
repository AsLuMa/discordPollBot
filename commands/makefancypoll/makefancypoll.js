import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder as MessageEmbed,
    EmbedBuilder, hideLinkEmbed, Message,
    SlashCommandBuilder
} from 'discord.js';

export const fancyPollCommand = {
    data: new SlashCommandBuilder()
        .setName('fancypoll')
        .setDescription('Fancy poll with buttons ' + "\u2728")
        .addStringOption(date1 =>
            date1.setName('game')
                .setDescription('What do you want to play?')),

    async execute(interaction){
        // await interaction.reply({ content: 'This will surely be the fanciest poll ' + "\u2728", ephemeral: true}  )

        function makeButton(buttonId, name, buttonStyle) {
            return new ButtonBuilder()
                .setCustomId(buttonId)
                .setLabel(name)
                .setStyle(buttonStyle);
        }

        const editButton = makeButton('editButton', 'Edit poll', ButtonStyle.Danger);
        const makePollButton = makeButton('makePoll', 'Start making poll!', ButtonStyle.Primary);
        const doneEditingButton = makeButton('doneEditing', 'Done atoning for my sins', ButtonStyle.Primary);

        // let buttons = [editButton, makePollButton];

        const firstMessageRow = new ActionRowBuilder();
        firstMessageRow.addComponents(makePollButton);

        interaction.reply('At some point there will be a fancy description of how to make the poll here');

        interaction.channel.send( { components: [firstMessageRow], ephemeral: true } );

        //make and send this on click

        const pollWindow = new MessageEmbed()
            .setDescription(`Todo: 
            - add click listener to make poll button \n
            - this starts a loop of asking user for input/dates \n
            - make embed with the actual poll, and send it \n
            - make logic for editing poll. Availabilities will change`);

        const embedEditRow = new ActionRowBuilder();
        embedEditRow.addComponents(editButton);

        interaction.channel.send( { embeds: [pollWindow], ephemeral:true } );
        interaction.channel.send( { components: [embedEditRow], ephemeral:true } );

        const doneEditingRow = new ActionRowBuilder();
        doneEditingRow.addComponents(doneEditingButton);

        const editPlaceholder = new MessageEmbed()
            .setDescription("This will at some point be an edit function. Probably.")

        interaction.channel.send( { embeds: [editPlaceholder], ephemeral:true } );
        interaction.channel.send( { components: [doneEditingRow], ephemeral:true } );



    //
    //     const collectorFilter = i => i.user.id === interaction.user.id;
    //
    //     try {
    //         const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
    //         if (confirmation.customId === 'confirm') {
    //             await confirmation.update({ content: `A very important update after clicking the button.`, components: [] });
    //         }
    //     } catch (e) {
    //         await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
    //     }

    },



}



