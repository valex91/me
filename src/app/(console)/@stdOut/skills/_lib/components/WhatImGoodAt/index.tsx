import { copywrite } from '@/app/_lib/const/copywrite';
import { AsciiLogoDisplayer } from '../Logo';
import {
  ANGULAR_ASCII,
  AWS_ASCII,
  JS_ASCII,
  NODE_ASCII,
  REACT_ASCII,
  TS_ASCII,
} from './const/logos';

const skillLogos = [
  TS_ASCII,
  JS_ASCII,
  NODE_ASCII,
  AWS_ASCII,
  REACT_ASCII,
  ANGULAR_ASCII,
];

export default function WhatImGoodAt() {
  return (
    <>
      <div className="flex flex-wrap align-center justify-evenly mb-4">
        {skillLogos.map((ascii, i) => (
          <AsciiLogoDisplayer key={i} logoAscii={ascii} />
        ))}
        <p className="mt-4">{copywrite.skills}</p>
      </div>
    </>
  );
}
