import Link from 'next/link';

export default function TootsieCopy() {
  return (
    <>
      <p className="mb-4">
        A mobile-only web application developed using NextJS, Node.js, and
        Supabase to support bilingual learning. The application features
        advanced localization, cached translations, and automatic multilingual
        translation capabilities, enabling users to efficiently access a deck of
        flashcards designed to aid my daughter&apos;s bilingual education.
        Available{' '}
        <Link
          className="underline cursor-pointer"
          href="https://tootsie.vercel.app/"
        >
          here
        </Link>
      </p>
    </>
  );
}
