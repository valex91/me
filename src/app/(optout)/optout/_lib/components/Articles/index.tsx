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
      <div className="container md:flex md:space-x-20">
        {articles.map((a) => {
          return (
            <div
              key={a.link}
              className="max-h-[100px] h-[100px] mb-4 md:m-0 md:max-h-[200px] md:h-[200px] overflow-hidden"
            >
              {' '}
              <Link
                className="underline cursor-pointer	text-l text-flame mb-4"
                href={a.link}
              >
                {a.title}
                <div
                  className="text-white no-underline text-xs"
                  dangerouslySetInnerHTML={{__html: a.description}}
                ></div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
