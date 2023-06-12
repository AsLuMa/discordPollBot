import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';

/**
 * Register single slash command
 * @param {*} cmd 
 */
export const deployCommand = async (cmd) => {
  // TODO: Make guildIds a configurable parameter?
  const { clientID, guildID, token } = process.env;
  const rest = new REST().setToken(token);

  try {
    console.log(`Refreshing slash command '${cmd.data.name}'...`)
    return await rest.put(
      // TODO: also provide command id;
      // calls currently receive 405 Method Not Allowed
      Routes.applicationGuildCommand(clientID, guildID),
      {
        body: cmd.data.toJSON(),
      },
    );
  } catch (error) {
    console.error(error);
  }
}

/**
 * Register n slash commands
 * @param  {...any} commands 
 * @returns 
 */
export const deployCommands = async (...commands) => {
  const { clientID, guildID, token } = process.env;
  const rest = new REST().setToken(token);

  try {
    console.log('Refreshing application slash commands...');
    return await rest.put(
      Routes.applicationGuildCommands(clientID, guildID),
      {
        body: commands.map(cmd => cmd.data.toJSON())
      }
    );
  } catch (error) {
    console.error(error);
  }
}