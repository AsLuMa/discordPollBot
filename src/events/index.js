import { guildCreateEvent } from './guildCreate.js';
import { interactionCreateEvent } from './interactionCreate.js';
import { readyEvent } from './ready.js';

export { interactionCreateEvent, readyEvent, guildCreateEvent };
export default [
    interactionCreateEvent, readyEvent, guildCreateEvent
];