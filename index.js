const { Client, GatewayIntentBits, Collection} = require('discord.js');
// const { token } = require('./config.json');

require('dotenv').config();


const fs = require('node:fs');
const path = require('node:path');

// Guilds = servers
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
//* docs
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log('Warning: The command at ${filePath} is missing "data" or "execute" property.');
        }
    }

}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

void client.login(process.env.token);


