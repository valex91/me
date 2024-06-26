import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="mt-4 w-full text-center">
      <p className="w-8/12 my-0 mx-auto">
        Welcome to a Unique Browsing Experience! If you prefer a more
        traditional website layout{' '}
        <Link
          className="text-green underline pointer"
          href={{ pathname: '/optout' }}
        >
          click here
        </Link>
        . Otherwise,{' '}
        <Link
          download="CV Valentino Losito.pdf"
          className="text-green underline pointer"
          href={{ pathname: 'https://github.com/valex91/me/raw/main/public/CV.pdf' }}
        >
          download my CV
        </Link>{' '}
        or continue here for a console-like interaction.
      </p>
      <p className="text-left mt-5 mb-1">
        Enter help for a list of built-in commands
      </p>
    </div>
  );
}
