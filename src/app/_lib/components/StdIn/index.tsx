'use client';

import { RefObject, useEffect, useRef, useState } from 'react';
import BlinkingCaret from '../BlinkingCaret';
import Breadcrumb from '../BreadCrumb';
import { usePathname, useRouter } from 'next/navigation';
import { parseStdIn } from './parseStdIn';
import { PrintOutputFn } from '../StdInWrapper';

type StdInProps = {
  enabled: boolean;
  printOutput: PrintOutputFn;
};

export default function StdIn({ enabled, printOutput }: StdInProps) {
  const [cmd, setCmd] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function scrollInViewStdIn() {
    if (formRef && formRef.current) {
      formRef.current.scrollIntoView({ block: 'end' });
    }
  }
  useEffect(() => {
    if (enabled && ref.current) {
      ref.current.focus();
    }
  }, [enabled]);

  useEffect(() => {
    scrollInViewStdIn();
  }, [cmd]);

  useEffect(() => {
    const focusInput = setInterval(() => {
      if (ref && ref.current && document.activeElement != ref.current) {
        ref.current.focus();
      }
    }, 200);

    return () => {
      clearInterval(focusInput);
    };
  }, []);

  return (
    <form
      ref={formRef}
      className="flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (cmd) {
          parseStdIn(cmd, router, printOutput, pathname);
        }
        setCmd('');
      }}
    >
      <label htmlFor="stdIn">
        <Breadcrumb />
      </label>
      <span className="ml-[5px]">{cmd}</span>
      <input
        id="stdIn"
        ref={ref}
        disabled={!enabled}
        autoFocus
        value={cmd}
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
