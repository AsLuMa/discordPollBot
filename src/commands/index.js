import { editpollCommand } from './edits/editpoll';
import { makepollCommand } from './makepoll/makepoll';

export * from './deploy';
export { editpollCommand, makepollCommand };
export default [
  editpollCommand,
  makepollCommand,
];
