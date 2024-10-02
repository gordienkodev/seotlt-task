import React from 'react';
import NewsItem from './NewsItem';

interface NewsListProps {
  newsList: { id: number; title: string; content: string }[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, content: string) => void;
}

export const NewsList: React.FC<NewsListProps> = ({ newsList, onDelete, onEdit }) => {
  return (
    <>
      {newsList.length > 0 ? (
        <ul>
          {newsList.map((news) => (
            <li key={news.id}>
              <NewsItem news={news} onSave={onEdit} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Please add news...</p>
      )}
    </>
  );
};
