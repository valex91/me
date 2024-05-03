import Commands from "./_lib/components/Commands";
import StdInWrapper from "@/app/_lib/components/StdInWrapper";

export default function HelpPage() {
  return (
    <>
      <StdInWrapper initialState={<Commands />} enabled={true} />
    </>
  );
}
