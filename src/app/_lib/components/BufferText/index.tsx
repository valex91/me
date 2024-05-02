"use client";

import { useEffect, useState } from "react";
import BlinkingCaret from "../BlinkingCaret";

export type BufferTextProps = {
  text: string;
  deliveryPerCharacter?: number;
};
export default function BufferText({
  text,
  deliveryPerCharacter = 30,
}: BufferTextProps) {
  const [buffer, setBuffer] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const bufferTicks = setInterval(() => {
      if (buffer.length < text.length) {
        setBuffer((b) => b + text[b.length]);
      } else {
        if (!done) {
          setDone(true);
        }
      }
    }, deliveryPerCharacter);

    return () => {
      clearInterval(bufferTicks);
    };
  }, [buffer, done]);

  return (
    <p>
      {buffer}
      {!done ? <BlinkingCaret /> : null}
    </p>
  );
}
