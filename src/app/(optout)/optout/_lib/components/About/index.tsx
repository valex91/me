import Link from 'next/link';
import SectionTitle from '../SectionTitle';

export default function About() {
  return (
    <>
      <p className="font-thin mb-4">
        I&apos;m a tech enthusiast with a solid background in building,
        deploying, and managing scalable web applications on{' '}
        <strong className="text-flame">AWS</strong>. I love coding in{' '}
        <strong className="text-flame">Typescript</strong> and{' '}
        <strong className="text-flame">Node.js,</strong> crafting both the guts
        and the face of web applications. My expertise is in blending
        cutting-edge development practices, thorough testing, and agile
        methodologies to boost both performance and productivity.
      </p>
      <p className="font-thin mb-4">
        Beyond the professional sphere, I’m a big fan of tinkering with
        electronics—it’s always fun to mess around with gadgets and see what new
        things I can create or improve. I also have a passion for video games
        and photography, which not only fuel my creativity but keep me
        constantly inspired. Hacking and exploring new possibilities in tech
        also keep me on my toes and excited about the future.{' '}
      </p>
      <p className="font-thin mb-4">
        I thrive on leading projects and working alongside diverse teams to cook
        up innovative, cloud-based solutions. Whether it&apos;s streamlining
        processes or juggling multiple projects, I&apos;m all about delivering
        results that make a difference. Let&apos;s make something awesome
        together!
      </p>
      <Link
        download="CV Valentino Losito.pdf"
        className="font-bold mb-4 underline text-flame"
        href={{
          pathname: 'https://github.com/valex91/me/raw/main/public/CV.pdf',
        }}
      >
        Download my CV
      </Link>
    </>
  );
}
