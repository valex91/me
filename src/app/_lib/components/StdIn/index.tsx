'use client';

import { useEffect, useRef, useState } from 'react';
import BlinkingCaret from '../BlinkingCaret';
import Breadcrumb from '../BreadCrumb';
import { useRouter } from 'next/navigation';
import { parseStdIn } from './parseStdIn';

type StdInProps = {
  enabled: boolean;
};

export default function StdIn({ enabled }: StdInProps) {
  const [cmd, setCmd] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (enabled && ref.current) {
      ref.current.focus();
    }
  }, [enabled]);

  return (
    <form
      className="flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
        parseStdIn(cmd, router);
      }}
    >
      <label htmlFor="stdIn">
        <Breadcrumb />
      </label>
      <span>{cmd}</span>
      <input
        id="stdIn"
        ref={ref}
        disabled={!enabled}
        autoFocus
        onChange={(v) => {
          setCmd(v.target.value);
        }}
        className="w-0 border-0 p-0 m-0 bg-transparent outline-none"
        type="text"
      ></input>
      {enabled ? <BlinkingCaret /> : null}
    </form>
  );
}
