"use client";

import { useState } from "react";
import StdIn from "../StdIn";

export type PrintOutputFn = (output: string) => void;
export const CLEAR_CHAR = "&>$`CLEAR__CONSOLE__$<&`";

export type StdInWrapperProps = {
  enabled: boolean;
  initialState?: React.ReactNode;
};

export default function StdInWrapper({
  enabled,
  initialState,
}: StdInWrapperProps) {
  const [stdOutBuffer, setStdOutBuffer] = useState<string[]>([]);
  const [hasReceivedClear, setHasReceivedClear] = useState<boolean>(false);
  const improvedSet = (output: string) => {
    if (output === CLEAR_CHAR) {
      setStdOutBuffer([]);
      setHasReceivedClear(true);
    } else {
      setStdOutBuffer([...stdOutBuffer, output]);
    }
  };

  return (
    <>
      {hasReceivedClear ? null : initialState}
      {stdOutBuffer.map((line, i) => {
        return <p key={i}>{line}</p>;
      })}
      <StdIn enabled={enabled} printOutput={improvedSet} />
    </>
  );
}
