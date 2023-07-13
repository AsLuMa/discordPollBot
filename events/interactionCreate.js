import {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder as MessageEmbed, Events} from 'discord.js';
import { makeButton } from "../commands/makefancypoll/makefancypoll.js";

const editButton = makeButton('edit', 'Edit poll', ButtonStyle.Danger);
const doneEditingButton = makeButton('doneEditing', 'Done atoning for my sins', ButtonStyle.Primary);


export const interactionCreateEvent = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if(!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(`Error executing command`);
                console.error(error);
            }

        }
        else if (interaction.isButton()) {

            if (interaction.customId === 'makePoll') {
                console.log("clicked makepollbutton");

                const pollWindow = new MessageEmbed()
                    .setDescription(`Todo:
                - fix the click listeners (can we move the logic in interactionCreate to makefancypoll.js?) \n
                - this embed window should starts a loop where user is asked to input dates \n
                - then the embed with the actual poll should be made and sent/rendered \n
                - fix \'interaction failed\'-message`);

                const embedEditRow = new ActionRowBuilder();
                embedEditRow.addComponents(editButton);


                interaction.channel.send( { embeds: [pollWindow], ephemeral:true } );
                interaction.channel.send( { components: [embedEditRow], ephemeral:true } );


            }

            if (interaction.customId === 'edit'){
                console.log("clicked editbutton");

                const doneEditingRow = new ActionRowBuilder();
                doneEditingRow.addComponents(doneEditingButton);

                const editPlaceholder = new MessageEmbed()
                    .setDescription("This will at some point be an edit function. Probably.")

                interaction.channel.send({ embeds: [editPlaceholder], ephemeral:true });
                interaction.channel.send({ components: [doneEditingRow], ephemeral:true });

                }

            if (interaction.customId === 'doneEditing') {
                console.log("clicked atone button");
                // interaction.reply({ content: "All done", ephemeral: true });
                interaction.channel.send("This should return an updated version the embed window with the poll. " +
                    "And an edit button, for further edits. " +
                "We also have to deal with the emoji-reactions-somehow. Retain whatever has been voted on. Maybe change text color of the option that was changed.");

            }


        }






    },
};




