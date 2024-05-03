import {
  CommandsEnum,
  FlagsEnum,
  flagForCommandValidator,
} from '@/app/(console)/@stdOut/help/_lib/components/Commands';
import { PrintOutputFn } from '../StdInWrapper';
import { CmdParams } from './parseStdIn';

export const directories = [
  'projects/',
  'skills/',
  'carreer/ ',
  'bio/',
  'social/',
  'articles/',
  '.hacking/',
];

export const lsStrategy = (
  _: unknown,
  print: PrintOutputFn,
  cmdParams: CmdParams
) => {
  if (cmdParams.flags) {
    const relevantFlags = cmdParams.flags.filter((flag) =>
      flagForCommandValidator(CommandsEnum.LS, flag)
    );
    if (relevantFlags.includes(FlagsEnum.ALL)) {
      print(directories.join(' '));
      return;
    }
  }
  print(directories.filter((dir) => !dir.startsWith('.')).join(' '));
};
