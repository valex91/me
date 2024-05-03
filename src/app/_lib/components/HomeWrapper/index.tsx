"use client";

import BufferText from "../BufferText";

import { copywrite } from "../../const/copywrite";

import { useState } from "react";
import Disclaimer from "../Disclaimer";
import StdInWrapper from "../StdInWrapper";

export default function HomeWrapper() {
  const [typedOut, setTypedOut] = useState(false);

  return (
    <>
      <BufferText text={copywrite.summary} onDone={() => setTypedOut(true)} />
      {typedOut ? <Disclaimer /> : null}
      <StdInWrapper enabled={typedOut} />
    </>
  );
}
