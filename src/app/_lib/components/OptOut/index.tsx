import Link from 'next/link';

export default function OptOut() {
  return (
    <Link
      className="text-yellow underline pointer"
      href={{ pathname: '/optout' }}
    >
      My CV is available here
    </Link>
  );
}
