import Image from 'next/image';

export default function OptOutHeader() {
  return (
    <div className="container flex items-center">
      <div className="flex-1 self-end mb-4">
        <p className="font-thin">
          Hello<strong className="text-flame font-extrabold">, </strong>
          my name is
        </p>
        <h1 className="text-xl font-extrabold text-flame">Valentino Losito</h1>
        <span className="font-thin border-b border-flame">
          I'm a Full stack Software engineer
          <strong className="text-flame font-extrabold">.</strong>
        </span>
      </div>
      <Image src="/me/fox.png" alt="fox" width="300" height="300" />
    </div>
  );
}
