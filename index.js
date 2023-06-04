// imports
const { Clients, Events, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')

// Guilds = servers
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

client.login(token);
