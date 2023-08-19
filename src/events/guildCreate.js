import { EmbedBuilder, Events } from "discord.js";

export const guildCreateEvent = {
  name: Events.GuildCreate,
  once: false,
  execute: async guild => {
    // Log guild info to console
    const guildString = guildToString(guild);
    console.log('Joined server:', guildString);

    // Notify status channel of guild event, if BOT_STATUS_CHANNEL is set
    const { BOT_STATUS_CHANNEL } = process.env;
    if (BOT_STATUS_CHANNEL) {
      const { channels } = guild.client;
      const statusChannel = await channels.fetch(BOT_STATUS_CHANNEL);

      if (statusChannel) {
        const guildEmbed = new EmbedBuilder()
          .setTitle(guildString)
          .setDescription('Joined server');

        statusChannel.send({
          embeds: [guildEmbed]
        });
      }
    }
  }
};

const guildToString = guild => `${guild.name} (${guild.memberCount} members)`;
