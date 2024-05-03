import {
  CommandsEnum,
  FlagsEnum,
  flagForCommandValidator,
} from "@/app/(console)/@stdOut/help/_lib/components/Commands";
import { PrintOutputFn } from "../StdInWrapper";
import { CmdParams } from "./parseStdIn";
import Disclaimer from "../Disclaimer";

export enum Directories {
  PROJECTS = "/projects",
  SKILLS = "skills/",
  CAREER = "carreer/",
  BIO = "bio/",
  SOCIAL = "social/",
  ARTICLES = "articles/",
  HACKING = ".hacking/",
}

export const directories = [
  "projects/",
  "skills/",
  "carreer/ ",
  "bio/",
  "social/",
  "articles/",
  ".hacking/",
];

export const ContentInContext: Partial<Record<Directories, string[]>> = {
  [Directories.PROJECTS]: ["twitterant.txt", "tootsie.txt"],
};

export const getFileByContext = (context: string) => {
  return ContentInContext[context as Directories];
};

export const lsStrategy = (
  _: unknown,
  print: PrintOutputFn,
  cmdParams: CmdParams,
  context: Directories
) => {
  if (context && context !== "/") {
    console.log(context, " CONTEXTTTTT");
    print(getFileByContext(context).join(" "));
    return;
  }

  if (cmdParams.flags) {
    const relevantFlags = cmdParams.flags.filter((flag) =>
      flagForCommandValidator(CommandsEnum.LS, flag)
    );
    if (relevantFlags.includes(FlagsEnum.ALL)) {
      print(directories.join(" "));
      return;
    }
  }
  print(directories.filter((dir) => !dir.startsWith(".")).join(" "));
};
