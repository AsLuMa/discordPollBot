import { EmbedBuilder, Events } from 'discord.js';

export const readyEvent = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        const { channels, guilds } = client;

        // Collect active server names and output to console
        const servers = guilds.cache.map(guild => guild.name).join(', ');
        console.log(`Logged in as ${client.user.tag} to servers: ${servers}`);

        // Notify status channel of login event and active servers,
        // if BOT_STATUS_CHANNEL is set
        const { BOT_STATUS_CHANNEL } = process.env;
        if (BOT_STATUS_CHANNEL) {
            const statusChannel = await channels.fetch(BOT_STATUS_CHANNEL);

            if (statusChannel) {
                const serversEmbed = loggedInServersToEmbed(servers);
                statusChannel.send({
                    embeds: [serversEmbed]
                });
            }
        }
    },
};

const loggedInServersToEmbed = servers => new EmbedBuilder()
    .setDescription(`Logged in to servers: ${servers}`);