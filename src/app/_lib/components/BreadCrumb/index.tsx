'use client';

import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const path = usePathname();

  return (
    <span className="-ml-1.5 bg-blue px-1.5 flex">
      {path.includes('hacking') ? 'root@vale' : `~/vale${path}`}
      <span className="relative inline-block">
        <span className="absolute inline-block border-black inset-0 m-auto border-t-8 border-b-8 border-l-8 border-l-blue"></span>
      </span>
    </span>
  );
}
