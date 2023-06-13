import { Client, Events } from 'discord.js';

export const readyEvent = {
    /**
     * Interaction name
     */
    name: Events.ClientReady,
    once: true,

    /**
     * Execution
     * @param {Client} client
     */
    execute: client => {
        console.log(`Logged in as ${client.user.tag}`);
    }
}
