import TwitterantCopy from '@/app/(console)/@stdOut/projects/_lib/components/TwitterantCopy';
import SectionTitle from '../SectionTitle';
import TootsieCopy from '@/app/(console)/@stdOut/projects/_lib/components/TootsieCopy';
import MeCopy from '@/app/(console)/@stdOut/projects/_lib/components/MeCopy';

export default function Projects() {
  return (
    <div className="md:flex flex-col justify-center">
      <SectionTitle text="Projects" />
      <div className="container md:flex font-thin md:space-x-20">
        <div>
          <h4 className="text-xl font-bold text-flame mb-4">Twitterant</h4>
          <TwitterantCopy />
        </div>
        <div>
          <h4 className="text-xl font-bold text-flame mb-4">Tootsie</h4>
          <TootsieCopy />
        </div>
        <div>
          <h4 className="text-xl font-bold text-flame mb-4">Me</h4>
          <MeCopy />
        </div>
      </div>
    </div>
  );
}
