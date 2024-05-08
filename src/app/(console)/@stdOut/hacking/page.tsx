'use client';

import BufferText from '@/app/_lib/components/BufferText';
import Disclaimer from '@/app/_lib/components/Disclaimer';
import StdInWrapper from '@/app/_lib/components/StdInWrapper';
import { copywrite } from '@/app/_lib/const/copywrite';
import React, { useState } from 'react';

export default function HackingPage() {
  const [typedOut, setTypedOut] = useState(false);

  return (
    <>
      <BufferText text={copywrite.hacking} onDone={() => setTypedOut(true)} />
     <StdInWrapper enabled={typedOut} />
    </>
  );
}
