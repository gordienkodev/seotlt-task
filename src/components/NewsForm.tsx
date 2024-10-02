import { useState } from 'react';

interface NewsFormProps {
  onAdd: (news: { id: number; title: string; content: string }) => void;
}

export const NewsForm: React.FC<NewsFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ id: Date.now(), title, content });
    setTitle('');
    setContent('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
        <textarea onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
        <button type="submit">Add news</button>
      </form>
    </>
  );
};
