import { DO_MAGIC } from "./actionList";

export const doMagic = message => {
  return {
    type: DO_MAGIC,
    message
  };
};
