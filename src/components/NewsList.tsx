import NewsItem from './NewsItem';

interface NewsListProps {
  newsList: { id: number; title: string; content: string }[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, content: string) => void;
}

export const NewsList: React.FC<NewsListProps> = ({ newsList, onDelete, onEdit }) => {
  return (
    <ul>
      {newsList.map((news) => (
        <li key={news.id}><NewsItem news={news} onSave={onEdit} onDelete={onDelete} /></li>
      ))}
    </ul>
  );
};
