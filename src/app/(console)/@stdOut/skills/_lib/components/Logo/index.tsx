type AsciiLogoDisplayerProps = {
  logoAscii: string;
};

export function AsciiLogoDisplayer({ logoAscii }: AsciiLogoDisplayerProps) {
  return <pre className="text-[0.10rem]">{logoAscii}</pre>;
}
