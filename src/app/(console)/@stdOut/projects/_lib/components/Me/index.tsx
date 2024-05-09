import MeHeader from '../MeHeader';

export default function Me() {
  return (
    <>
      <MeHeader />
      <p>
        you&apos;re browsing it right now! It&apos;s built from scratch using TypeScript,
        NextJS, and TailwindCSS. Everything you see is hand-coded to mimic a
        UNIX-like console, using TypeScript and the Browser API to create a
        simple parser and handle StdIn/StdOut. Plus, I&apos;ve thrown in a few twists
        and Easter eggs—because why not? Enjoy exploring!
      </p>
    </>
  );
}
