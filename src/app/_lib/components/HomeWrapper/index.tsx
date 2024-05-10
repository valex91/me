'use client';

import BufferText from '../BufferText';

import {copywrite} from '../../const/copywrite';

import {useEffect, useState} from 'react';
import Disclaimer from '../Disclaimer';
import StdInWrapper from '../StdInWrapper';
import useWindowSize from '../../hooks/useWindowSize';
import Link from 'next/link';
import Overlay from '../Overlay';

export default function HomeWrapper() {
  const [typedOut, setTypedOut] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size && size.width && size.width <= 500) {
      setOverlay(true);
    } else {
      if (overlay) {
        setOverlay(false);
      }
    }
  }, [size]);

  return (
    <>
      {overlay ? <Overlay /> : null}
      <BufferText text={copywrite.summary} onDone={() => setTypedOut(true)} />
      {typedOut ? <Disclaimer /> : null}
      <StdInWrapper enabled={typedOut} />
    </>
  );
}
