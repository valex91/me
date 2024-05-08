type CareerStepProps = {
  employeer: string;
  timeFrame: string;
  tasks: string[];
  title: string;
};

export default function CareerStep({
  employeer,
  timeFrame,
  tasks,
  title,
}: CareerStepProps) {
  return (
    <div className="border flex items-center p-2">
      <div className="flex flex-col ">
        <span className="text-lg underline">{employeer}</span>
        <span className="text-lg italic">{title}</span>
        <span>{timeFrame}</span>
      </div>
      <div className="ml-auto w-8/12">
        <ul className="list-disc justify-self-end">
          {tasks.map((t, i) => (
            <li className="text-sm" key={i}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
