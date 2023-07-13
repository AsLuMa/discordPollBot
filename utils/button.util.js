import { ButtonBuilder } from "discord.js";
export function makeButton(buttonId, name, buttonStyle) {
    return new ButtonBuilder()
        .setCustomId(buttonId)
        .setLabel(name)
        .setStyle(buttonStyle);
}
