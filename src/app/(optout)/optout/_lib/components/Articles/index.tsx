'use client';

import {ArticleFeed} from '@/app/(console)/@stdOut/hacking/_lib/components/ArticleDisplay';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import SectionTitle from '../SectionTitle';

export default function Articles() {
  const [articles, setArticles] = useState<ArticleFeed[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@valesteve91'
        );

        const data = await response.json();
        setArticles(data.items);
      } catch {}
    };

    fetchData();
  }, []);

  return (
    <div className="mb-4">
      <SectionTitle text="Articles & Writeups" />
      <div className="container flex space-x-20">
        {articles.map((a) => {
          return (
            <Link
              key={a.link}
              className="underline max-h-[200px] cursor-pointer overflow-hidden text-l text-flame mb-4"
              href={a.link}
            >
              {a.title}
              <div
                className="text-white no-underline text-xs"
                dangerouslySetInnerHTML={{__html: a.description}}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
