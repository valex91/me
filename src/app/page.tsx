import BufferText from "./_lib/components/BufferText";
import Name from "./_lib/components/Name";
import Image from "./_lib/components/Image";
import { copywrite } from "./_lib/const/copywrite";
import StdIn from "./_lib/components/StdIn";

export default function Home() {
  return (
    <>
      <Name />
      <BufferText text={copywrite.summary} />
      <StdIn />
    </>
  );
}
