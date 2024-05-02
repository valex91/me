import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

enum Commands {
  HELP = 'help',
  CD = 'cd',
}

const AVAILABLE_COMMAND = ['help', 'cd'];

const cmdStrategyMap = {
  [Commands.HELP]: (router: AppRouterInstance) => router.push('help'),
  [Commands.CD]: (router: AppRouterInstance) => router.back(),
};

export const parseStdIn = (cmd: string, router: AppRouterInstance) => {
  const cmdHead = cmd.split(' ')[0];

  if (AVAILABLE_COMMAND.includes(cmdHead.toLowerCase())) {
    cmdStrategyMap[cmdHead as keyof typeof cmdStrategyMap](router);
  }
};
