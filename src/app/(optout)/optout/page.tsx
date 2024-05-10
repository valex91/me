import About from './_lib/components/About';
import Articles from './_lib/components/Articles';
import OptOutHeader from './_lib/components/Header';
import Projects from './_lib/components/Projects';
import Skills from './_lib/components/Skills';

export default function OptOutPage() {
  return (
    <div className="p-10 py-0">
      <OptOutHeader />
      <About />
      <Projects />
      <Skills />
      <Articles />
    </div>
  );
}
