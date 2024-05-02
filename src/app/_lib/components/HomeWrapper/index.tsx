'use client';

import BufferText from '../BufferText';

import { copywrite } from '../../const/copywrite';

import StdIn from '../StdIn';
import { useState } from 'react';
import Disclaimer from '../Disclaimer';

export default function HomeWrapper() {
  const [typedOut, setTypedOut] = useState(false);

  return (
    <>
      <BufferText text={copywrite.summary} onDone={() => setTypedOut(true)} />
      {typedOut ? <Disclaimer /> : null}
      <StdIn enabled={typedOut} />
    </>
  );
}
