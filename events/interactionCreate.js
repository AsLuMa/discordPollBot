import { Events } from 'discord.js';

export const interactionCreateEvent = {
    /**
     * Interaction name
     */
    name: Events.InteractionCreate,

    /**
     * Execution
     * @param {*} interaction
     * @returns
     */
    execute: async interaction => {
        if (!interaction.isChatInputCommand())
            return;

        const command = interaction.client.commands.get(interaction.commandName);

        // this might interfere with a button handler?
        // if(!command) {
        //     console.error(`No command matching ${interaction.commandName} was found.`);
        //     return;
        // }
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing command`);
            console.error(error);
        }

        // button handler goes here
    }
}
