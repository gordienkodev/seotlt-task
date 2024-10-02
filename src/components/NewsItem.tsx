import { useState } from 'react';

interface NewsItemProps {
  news: { id: number; title: string; content: string };
  onSave: (id: number, title: string, content: string) => void;
  onDelete: (id: number) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(news.title);
  const [content, setContent] = useState(news.content);

  const handleSave = () => {
    onSave(news.id, title, content);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {news.title} {news.content} <button onClick={() => setIsEditing(true)}>Edit</button>{' '}
          <button onClick={() => onDelete(news.id)}>Remove</button>
        </>
      )}
    </div>
  );
};

export default NewsItem;
