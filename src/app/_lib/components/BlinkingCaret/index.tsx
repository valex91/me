"use client";

import { useEffect, useState } from "react";

export default function BlinkingCaret() {
  const [blank, setBlank] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlank((blankS) => !blankS);
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <span className="text-white text-[2rem] leading-[2rem]">
      {String.fromCharCode(blank ? 9646 : 9647)}{" "}
    </span>
  );
}
