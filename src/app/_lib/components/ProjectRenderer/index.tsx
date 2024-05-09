import Twitterant from '@/app/(console)/@stdOut/projects/_lib/components/Twitterant';
import { Directories } from '../StdIn/ls';
import Tootsie from '@/app/(console)/@stdOut/projects/_lib/components/Tootsie';
import Me from '@/app/(console)/@stdOut/projects/_lib/components/Me';
import WhatImGoodAt from '@/app/(console)/@stdOut/skills/_lib/components/WhatImGoodAt';
import Timeline from '@/app/(console)/@stdOut/career/_lib/components/Timeline';
import ArticleDisplay from '@/app/(console)/@stdOut/hacking/_lib/components/ArticleDisplay';

const fileToRenderMap = {
  [Directories.PROJECTS]: {
    'twitterant.txt': <Twitterant />,
    'tootsie.txt': <Tootsie />,
    'me.txt': <Me />,
  },
  [Directories.SKILLS]: {
    'what_im_good_at.txt': <WhatImGoodAt />,
  },
  [Directories.HACKING]: {
    '.writeups.txt': <ArticleDisplay />,
  },
  [Directories.CAREER]: {
    'timeline.txt': <Timeline />,
  },
};

export type CATStructure = typeof fileToRenderMap;

export type CATDir = keyof CATStructure;
export type CATFileNameName<T extends CATDir> = keyof CATStructure[T];

type ProjectRendererProps = {
  fileToRenderPath: [CATDir, CATFileNameName<CATDir>];
};

export const catError = (
  fileToRenderPath: [CATDir, CATFileNameName<CATDir>]
) => {
  let errorP = '';
  if (fileToRenderPath.length > 1) {
    errorP = fileToRenderPath.join('/');
  } else {
    errorP = fileToRenderPath[0];
  }
  return `cat: ${fileToRenderPath.join('/')}: No such file`;
};

function getValue<
  T extends keyof CATStructure,
  K extends keyof CATStructure[T],
>(keys: [T, K]): React.ReactNode | undefined {
  const [directoryKey, fileKey] = keys as unknown as [T, K];

  for (const objDirectoryKey in fileToRenderMap) {
    if (objDirectoryKey.includes(directoryKey)) {
      for (const objFileKey in fileToRenderMap[objDirectoryKey as T]) {
        if (objFileKey.includes(fileKey as string)) {
          return fileToRenderMap[objDirectoryKey as T][
            objFileKey as unknown as K
          ] as React.ReactNode;
        }
      }
    }
  }

  // instead of undefined should return a close guess of what was searched?
  return undefined;
}

export default function CatRenderer({
  fileToRenderPath,
}: ProjectRendererProps) {
  return (
    <>
      <span>{getValue(fileToRenderPath) ?? catError(fileToRenderPath)}</span>
    </>
  );
}
