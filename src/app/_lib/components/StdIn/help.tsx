import { CommandStrategy } from './parseStdIn';
import { PrintOutputFn } from '../StdInWrapper';
import ConsoleCommand from '@/app/(console)/@stdOut/help/_lib/components/Commands';

export const helpStrategy: CommandStrategy = (
  _: unknown,
  print: PrintOutputFn
) => {
  print(<ConsoleCommand />);
  return;
};
