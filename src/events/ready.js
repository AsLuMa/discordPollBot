import { Events } from 'discord.js';

export const readyEvent = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);
    },
};