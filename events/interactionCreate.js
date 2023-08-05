import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder as MessageEmbed, Events } from 'discord.js';
import { makeButton } from "../utils/button.util.js";
import {onMakePollButtonClick} from "../commands/makefancypoll/onMakePollButtonClick.js";


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

                onMakePollButtonClick(interaction);

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
