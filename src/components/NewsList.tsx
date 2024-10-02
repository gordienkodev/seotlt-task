import React from 'react';

interface NewsListProps {
  newsList: { id: number; title: string; content: string }[];
}

export const NewsList: React.FC<NewsListProps> = ({ newsList }) => {
  return (
    <ul>
      {newsList.map((news) => (
        <li key={news.id}>
          {news.title}, {news.content}{' '}
        </li>
      ))}
    </ul>
  );
};
