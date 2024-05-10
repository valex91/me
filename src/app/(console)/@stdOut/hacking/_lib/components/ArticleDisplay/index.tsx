'use client';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export type ArticleFeed = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  title: string;
  link: string;
};

export default function ArticleDisplay() {
  const [articles, setArticles] = useState<ArticleFeed[]>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@valesteve91'
        );

        const data = await response.json();
        setArticles(
          data.items.filter((i: ArticleFeed) => i.title.includes('write'))
        );
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container flex-wrap justify-evenly flex mb-4">
      {articles.map((art) => {
        return (
          <div
            className="flex flex-col justify-center text-center"
            key={art.link}
          >
            <Link className="underline" href={art.link}>
              <h2>{art.title}</h2>
              <p>Read it on Medium</p>
              <span>(Not paywalled)</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
