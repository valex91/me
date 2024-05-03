'use client';

import { useEffect, useState } from 'react';
import BlinkingCaret from '../BlinkingCaret';

export type BufferTextProps = {
  text: string;
  deliveryPerCharacter?: number;
  onDone: () => void;
};
export default function BufferText({
  text,
  deliveryPerCharacter = 15,
  onDone,
}: BufferTextProps) {
  const [buffer, setBuffer] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const bufferTicks = setInterval(() => {
      if (buffer.length < text.length) {
        setBuffer((b) => b + text[b.length]);
      } else {
        if (!done) {
          onDone();
          setDone(true);
        }
      }
    }, deliveryPerCharacter);

    return () => {
      clearInterval(bufferTicks);
    };
  }, [buffer, done]);

  return (
    <p className="border p-1 mb-1">
      {`${buffer}`}
      {!done ? <BlinkingCaret /> : null}
    </p>
  );
}
