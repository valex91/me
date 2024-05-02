'use client';

import { useEffect, useState } from 'react';

export default function BlinkingCaret() {
  const [blank, setBlank] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlank((blankS) => !blankS);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span
      className={`w-[1rem] h-[20px] border-r-[10px] ${blank ? 'border-transparent' : 'border-white'}`}
    ></span>
  );
}
