import {
  CommandsEnum,
  commands,
  uova_di_pasqua,
} from "@/app/(console)/@stdOut/help/_lib/components/Commands";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { CLEAR_CHAR, PrintOutputFn } from "../StdInWrapper";
import { lsStrategy } from "./ls";

export type CmdParams = Record<"flags" | "args", string[]>;
const AVAILABLE_COMMAND = [
  ...commands.map((cmd) => cmd.cmd),
  ...uova_di_pasqua.map((cmd) => cmd.cmd),
];
let lastRoutedCommand: CommandsEnum | null = null;

//routable command need to be abstracted probably lets investigate what is needed when there is more implementations
const cmdStrategyMap: Record<
  CommandsEnum,
  (
    router: AppRouterInstance,
    print: PrintOutputFn,
    cmdParams: CmdParams
  ) => void
> = {
  [CommandsEnum.HELP]: (router: AppRouterInstance, _: unknown, __: unknown) => {
    if (lastRoutedCommand === CommandsEnum.HELP) {
      window.location.reload();
    } else {
      router.push("help");
      lastRoutedCommand = CommandsEnum.HELP;
    }
  },
  [CommandsEnum.CD]: (router: AppRouterInstance) => router.back(),
  [CommandsEnum.LS]: lsStrategy,
  [CommandsEnum.WHOAMI]: (_: never, print: PrintOutputFn) => {
    print("root@mainframe: You are in!");
  },
  [CommandsEnum.CLEAR]: (_: AppRouterInstance, print: PrintOutputFn) => {
    print(CLEAR_CHAR);
  },
  [CommandsEnum.CAT]: (_: unknown, print: PrintOutputFn) => {},
};

export const parseStdIn = (
  cmd: string,
  router: AppRouterInstance,
  printOutput: PrintOutputFn
) => {
  const cmdSplit = cmd.split(" ");
  const cmdHead = cmdSplit[0];
  const flags = cmdSplit
    .slice(1)
    .filter((fragment) => fragment.startsWith("-"));
  const args = cmdSplit
    .slice(1)
    .filter((fragment) => !fragment.startsWith("-"));

  if (AVAILABLE_COMMAND.includes(cmdHead.toLowerCase() as CommandsEnum)) {
    cmdStrategyMap[cmdHead as keyof typeof cmdStrategyMap](
      router,
      printOutput,
      { flags, args }
    );
  } else {
    printOutput(`command not found: ${cmdHead}`);
  }
};
