import { EmbedBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';
import { makeButton } from "../../utils/button.util.js";


export const onMakePollButtonClick = (interaction) => {

    const editButton = makeButton('edit', 'Edit poll', ButtonStyle.Danger);

    const pollWindow = new EmbedBuilder()
        .setDescription(`Todo:
    - fix the click listeners (can we move the logic in interactionCreate to makefancypoll.js?) \n
    - this embed window should starts a loop where user is asked to input dates \n
    - then the embed with the actual poll should be made and sent/rendered \n
    - fix \'interaction failed\'-message`)
        .addFields();

    const embedEditRow = new ActionRowBuilder();
    embedEditRow.addComponents(editButton);

    interaction.channel.send( { embeds: [pollWindow], ephemeral:true } );
    interaction.channel.send( { components: [embedEditRow], ephemeral:true } );
}
