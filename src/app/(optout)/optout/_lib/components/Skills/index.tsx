import Image from 'next/image';
import SectionTitle from '../SectionTitle';

export const skillBadges = [
  'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
  'https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white',
  'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
  'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
];

export default function Skills() {
  return (
    <div className="mb-4">
      <SectionTitle text="Skills" />
      <div className="container flex flex-wrap justify-items-center justify-evenly">
        {skillBadges.map((b, i) => (
          <Image
            key={i}
            src={b}
            alt="skillBadge"
            className="mb-4"
            height="70"
            width="260"
          />
        ))}
      </div>
    </div>
  );
}
