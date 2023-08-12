import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder as MessageEmbed,
  EmbedBuilder, hideLinkEmbed, Message,
  SlashCommandBuilder
} from 'discord.js';
import 'node:timers/promises';
import { makeButton } from "../../../utils/button.util.js";

export const fancyPollCommand = {
  data: new SlashCommandBuilder()
      .setName('fancypoll')
      .setDescription('Fancy poll with buttons ' + "\u2728")
      .addStringOption(date1 =>
          date1.setName('game')
              .setDescription('What do you want to play?')),

  async execute(interaction){
      // await interaction.reply({ content: 'This will surely be the fanciest poll ' + "\u2728", ephemeral: true}  )

      const makePollButton = makeButton('makePoll', 'Start making poll!', ButtonStyle.Primary);

      const firstMessageRow = new ActionRowBuilder();
      firstMessageRow.addComponents(makePollButton);

      // todo deferReply()
      await interaction.reply( {content: 'At some point there will be a fancy description of how to make the poll here', components: [firstMessageRow] } );

  },



}
