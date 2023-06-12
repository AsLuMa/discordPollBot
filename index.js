/**
 * Package imports
 */
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import dotenv from 'dotenv';

/**
 * Local imports
 */
import commands from './commands/index.js';
import events from './events/index.js';

/**
 * Configure environment and extract environment variables
 */
dotenv.config();
const { token } = process.env;

/**
 * Initialize Discord client
 */
const client = new Client({
    intents: [GatewayIntentBits.Guilds] // Guilds = servers
});

/**
 * Register commands
 */
client.commands = new Collection(); // TODO: move to client init?

for (const cmd of commands) {
    if ('data' in cmd && 'execute' in cmd) {
        client.commands.set(cmd.data.name, cmd);
    } else {
        console.log('Warning: The command at ${filePath} is missing "data" or "execute" property.');
    }
}

/**
 * Register event handlers
 */
for (const e of events) {
    if (e.once) {
        client.once(e.name, (...args) => e.execute(...args));
    } else {
        client.on(e.name, (...args) => e.execute(...args));
    }
}

void client.login(token);
