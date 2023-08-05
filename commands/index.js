import { editpollCommand } from './edits/editpoll.js';
import { makepollCommand } from './makepoll/makepoll.js';
import { fancyPollCommand } from './makefancypoll/makefancypoll.js';

export * from './deploy.js';
export { editpollCommand, makepollCommand, fancyPollCommand };
export default [
    editpollCommand,
    makepollCommand,
    fancyPollCommand,
];
