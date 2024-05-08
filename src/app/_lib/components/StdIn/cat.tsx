import { PrintOutputFn } from '../StdInWrapper';
import { CmdParams } from './parseStdIn';
import { Directories } from './ls';
import CatRenderer, { CATDir, CATFileNameName } from '../ProjectRenderer';
import { pathingArgsUtil } from './pathing';

export const catStrategy = (
  _: unknown,
  print: PrintOutputFn,
  cmdParams: CmdParams,
  context: Directories
) => {
  if (!cmdParams.args.length) {
    print('\n');
  } else {
    const pathy = pathingArgsUtil(cmdParams.args);
    if (pathy.length === 1) {
      print(
        <CatRenderer
          fileToRenderPath={
            [context, ...pathy] as [CATDir, CATFileNameName<CATDir>]
          }
        />
      );
      return;
    } else {
      print(
        <CatRenderer
          fileToRenderPath={pathy as [CATDir, CATFileNameName<CATDir>]}
        />
      );
      return;
    }
  }
};
