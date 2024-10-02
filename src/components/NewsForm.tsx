import { ChevronDoubleDownIcon } from '@heroicons/react/16/solid';
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
    <form
      className="bg-white p-16 rounded-lg shadow-md flex gap-5 justify-center flex-col w-9/12"
      onSubmit={handleSubmit}
    >
      <input
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
        value={title}
        placeholder="Name..."
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        required
      />
      <textarea
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
        placeholder="Text..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
        required
      ></textarea>
      <div className="flex justify-center">
        <button type="submit">
          <ChevronDoubleDownIcon className="h-10 w-10 text-gray-500 hover:text-green-500 transition-colors duration-200" />
        </button>
      </div>
    </form>
  );
};
