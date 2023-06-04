// register and update slash commands

const { REST, Routes } = require('discord.js');
const { token, clientID, guildID, } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

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

//* syntax: docs
(async () => {
    try {
        console.log('Started refreshing application slash commands.');

        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildID),
            {body: commands},
        );

        console.log('Successfully reloaded slash commands.');
    } catch (error) {
        console.error(error);
    }
})();
