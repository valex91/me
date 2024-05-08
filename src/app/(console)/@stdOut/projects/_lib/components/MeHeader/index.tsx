const ASCII = `                 
 _______ _______ 
|\\     /|\\     /|
| +---+ | +---+ |
| |   | | |   | |
| |M  | | |e  | |
| +---+ | +---+ |
|/_____\\|/_____\\|`;

export default function MeHeader() {
  return <pre className="mb-4 text-green">{ASCII}</pre>;
}
