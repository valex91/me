import {
  CommandsEnum,
  FlagsEnum,
  flagForCommandValidator,
} from '@/app/(console)/@stdOut/help/_lib/components/Commands';
import { PrintOutputFn } from '../StdInWrapper';
import { CmdParams } from './parseStdIn';
import { pathingArgsUtil } from './pathing';

export enum Directories {
  PROJECTS = '/projects',
  SKILLS = '/skills',
  CAREER = '/career',
  // BIO = 'bio/',
  // SOCIAL = 'social/',
  // ARTICLES = 'articles/',
  HACKING = '/hacking',
  HELP = '/help',
  ROOT = '/',
}

export const directories = [
  'projects/',
  'skills/',
  'career/ ',
  // 'bio/',
  // 'social/',
  // 'articles/',
  '.hacking/',
];

const lsError = (path: string) => `ls: ${path} No such directory`;

export const ContentInDirectory: Partial<Record<Directories, string[]>> = {
  [Directories.PROJECTS]: ['twitterant.txt', 'tootsie.txt', 'me.txt'],
  [Directories.ROOT]: directories,
  [Directories.SKILLS]: ['what_im_good_at.txt'],
  [Directories.CAREER]: ['timeline.txt'],
  [Directories.HACKING]: ['.writeups.txt'],
};

export const getFilesByDirectory = (context: string) => {
  return ContentInDirectory[context as Directories];
};

type LSStructure = typeof ContentInDirectory;

function getContentOfDir<T extends keyof LSStructure>(
  key: T
): string[] | undefined {
  for (const objDirectoryKey in ContentInDirectory) {
    if (objDirectoryKey.includes(key)) {
      return ContentInDirectory[objDirectoryKey as T];
    }
  }

  return undefined;
}

const lsFlagsFilter = (cmdParams: CmdParams, directories: string[]) => {
  if (cmdParams.flags) {
    const relevantFlags = cmdParams.flags.filter((flag) =>
      flagForCommandValidator(CommandsEnum.LS, flag)
    );
    if (relevantFlags.includes(FlagsEnum.ALL)) {
      return directories.join(' ');
    }
  }

  return directories.filter((dir) => !dir.startsWith('.')).join(' ');
};

export const lsStrategy = (
  _: unknown,
  print: PrintOutputFn,
  cmdParams: CmdParams,
  context: Directories
) => {
  if (cmdParams.args.length) {
    const path = pathingArgsUtil(cmdParams.args) as Directories[];
    const content = getContentOfDir(path[path.length - 1]);

    print(
      content
        ? lsFlagsFilter(cmdParams, content)
        : lsError(cmdParams.args.join(''))
    );
    return;
  }

  if (context && context !== Directories.ROOT) {
    print(lsFlagsFilter(cmdParams, getFilesByDirectory(context)!));
    return;
  }

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
