// register and update slash commands
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientID, token, guildID } from './config.json';
import fs from 'node:fs';
import path from 'node:path';

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log('Warning: command at ${filePath} is missing required fields (data or execute)');
        }
    }
}

const rest = new REST().setToken(token);

// // delete global command
// rest.delete(Routes.applicationCommand(clientID, ''))
//     .then(() => console.log('Deleted global command'))
//     .catch(console.error);


//* syntax: docs
(async () => {
    try {
        console.log(`Started refreshing application slash commands.`);

        const data = await rest.put(
            Routes.applicationGuildCommands(clientID, guildID),
            {body: commands},
        );

        console.log(`Successfully reloaded slash commands.`);
    } catch (error) {
        console.error(error);
    }
})();

