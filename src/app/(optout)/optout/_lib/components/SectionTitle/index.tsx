type SectionTitleProps = {
  text: string;
};

export default function SectionTitle({text}: SectionTitleProps) {
  return (
    <h1 className="text-3xl text-center mb-4 font-bold font-extrabold text-flame">
      <span className="border-b border-flame pb-1 ">{text}</span>
    </h1>
  );
}
