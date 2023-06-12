import { editpollCommand } from './edits/editpoll.js';
import { makepollCommand } from './makepoll/makepoll.js';

export * from './deploy.js';
export { editpollCommand, makepollCommand };
export default [
  editpollCommand,
  makepollCommand,
];
