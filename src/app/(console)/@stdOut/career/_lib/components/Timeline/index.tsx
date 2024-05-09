import CareerStep from '../CareerStep';

const career = [
  {
    employeer: 'Dunelm',
    title: 'Full Stack Senior Software Engineer',
    timeframe: '08/2021 - Present',
    tasks: [
      `Architect and implement scalable web applications and services using Node.js as
backend services and React/Next.js for the frontend.`,
      `Design and manage AWS cloud infrastructure components such as S3, Event Bridge,
Step functions, Lambda deployed via CloudFormation or CDK as IaC.`,
      `implement CI/CD and maintaing pipelines using Gitlab, Monitor application
performance and status using Datadog.`,
    ],
  },
  {
    employeer: 'ITG Group',
    title: 'Senior Web Application Developer',
    timeframe: '01/2021 - 08/2021',
    tasks: [
      `Delivered complex business requirements and functionality of company product in
accordance to product specifications.`,
      `Crafted new practices and introduced Angular as a framework for new features into
an existing AngularJS application`,
    ],
  },
  {
    employeer: 'MHR',
    title: 'Senior Web Application Developer',
    timeframe: '04/2016 - 01/2021',
    tasks: [
      `Ensure high quality of coding standards by defining conventions while liaising with
      features team and senior developers. Train developers’ team by designing mentoring
      sessions to improve operation proficiency. Enhance main product features with a
      modern framework while working with Angular platform.`,
      `Crafted libraries and supported common features in product that promote re-
usability. `,
    ],
  },
  {
    employeer: 'Freelance',
    title: 'Web Application Developer',
    timeframe: '01/2016 - 04/2016',
    tasks: [
      `Crafted libraries and supported common features in product that promote re-
usability.`,
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mb-4">
      {career.map((careerInfo, i) => (
        <>
          {i != 0 ? (
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl">^</span>
              <span className="-mt-[1rem]">|</span>
            </div>
          ) : null}
          <CareerStep
            key={i}
            employeer={careerInfo.employeer}
            timeFrame={careerInfo.timeframe}
            tasks={careerInfo.tasks}
            title={careerInfo.title}
          />
        </>
      ))}
    </div>
  );
}
