import Link from 'next/link';

export default function Overlay() {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-black border border-green p-8 rounded-lg shadow-lg m-5">
          <h2 className="text-lg font-bold text-center text-red">Warning!</h2>
          <Link href={{pathname: '/optout'}}>
            Experience the Unix-like console the way it&apos;s meant to be—on a
            bigger screen! Have you ever tried using a terminal on your phone? I
            have—trust me, it&apos;s not ideal. For the best experience, please
            use the traditional website version{' '}
            <span className="underline">here</span>. Enjoy your console session
            another time!
          </Link>
        </div>
      </div>
    </>
  );
}
