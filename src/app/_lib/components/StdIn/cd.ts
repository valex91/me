import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { CmdParams, CommandStrategy } from "./parseStdIn";
import { PrintOutputFn } from "../StdInWrapper";
import { directories } from "./ls";

const toValidRoute = (
  path: string,
  router: AppRouterInstance,
  print: PrintOutputFn
) => {
  const isValid = !!directories.filter((dir) => dir.includes(path)).length;

  if (isValid) {
    router.push(path);
  } else {
    print(`cd: no such directory ${path}`);
  }
};

export const cdStrategy: CommandStrategy = (
  router: AppRouterInstance,
  print: PrintOutputFn,
  args: CmdParams
) => {
  if (!args.args.length) {
    router.back();
  } else if (args.args.length) {
    const last = args.args.slice(-1)[0];

    if (last.startsWith("..")) {
      router.back();
    } else {
      toValidRoute(last, router, print);
    }
  }
};
