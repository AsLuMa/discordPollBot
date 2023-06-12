/**
 * Package imports
 */
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { config as configureEnvironment } from 'dotenv';

/**
 * Local imports
 */
import commands, { deployCommands } from './commands';
import events from './events';

/**
 * Configure environment and extract environment variables
 */
configureEnvironment();
const { token } = process.env;

/**
 * Initialize Discord client
 */
const client = new Client({
    intents: [GatewayIntentBits.Guilds] // Guilds = servers
});

/**
 * Register commands
 * TODO: Handle all commands related startup logic elsewhere?
 */
client.commands = new Collection(); // TODO: move to client init?
for (const cmd of commands) {
    if ('data' in cmd && 'execute' in cmd) {
        client.commands.set(cmd.data.name, cmd);
        // deployCommand(cmd);
    } else {
        console.log('Warning: The command at ${filePath} is missing "data" or "execute" property.');
    }
}
// Refresh slash commands
deployCommands(...client.commands.values());

/**
 * Register event handlers
 * TODO: Handle all events related startup logic elsewhere?
 */
for (const e of events) {
    if (e.once) {
        client.once(e.name, (...args) => e.execute(...args));
    } else {
        client.on(e.name, (...args) => e.execute(...args));
    }
}

/**
 * Log in! Yay!
 */
void client.login(token);
