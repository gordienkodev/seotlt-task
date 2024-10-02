import React from 'react';

interface NewsListProps {
  newsList: { id: number; title: string; content: string }[];
  onDelete: (id: number) => void;
}

export const NewsList: React.FC<NewsListProps> = ({ newsList, onDelete }) => {
  return (
    <ul>
      {newsList.map((news) => (
        <li key={news.id}>
          {news.title}, {news.content} <button onClick={() => onDelete(news.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
