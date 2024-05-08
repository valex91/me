import { CmdParams } from "./parseStdIn";

export const pathingArgsUtil = (arg: CmdParams["args"]) => {
  const pathing = arg[0].split("/");
  // I do an assumption that since the FS is fake and I know the depth I will care about max the last 2 fragments
  const pathy = pathing.slice(-2).filter((v) => !!v && !v.startsWith(".."));

  return pathy;
};
