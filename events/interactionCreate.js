import { Events } from 'discord.js';

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
        // else if (interaction.isButton()) {
            // if (interaction.customId === 'editButton'){
                // const clickEvent = interaction.client.click.get(interaction.onclick);
                //
                // try {
                //     await clickEvent.execute(interaction);
                // } catch (error) {
                //     console.error(`Error executing command`);
                //     console.error(error);
                // }

            // }
            //button logic goes here
        // }




    },
};




