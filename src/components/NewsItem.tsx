import { ArchiveBoxXMarkIcon, CheckIcon, PencilIcon, XMarkIcon } from '@heroicons/react/16/solid';
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
    <article className="card">
      {isEditing ? (
        <>
          <header className="mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Title..."
            />
          </header>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Content..."
          ></textarea>
          <div className="flex gap-10 justify-center mt-4">
            <button
              onClick={handleSave}
              className="flex items-center  border-gray-300 py-2 px-4 rounded hover:text-green-600 duration-200"
            >
              <CheckIcon className="h-10 w-10 mr-2" />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center  border-gray-300 py-2 px-4 rounded hover:text-red-600 transition-colors duration-200"
            >
              <XMarkIcon className="h-10 w-10 mr-2" />
            </button>
          </div>
        </>
      ) : (
        <>
          <header className="text-gray-700 text-center text-3xl">{news.title}</header>
          <div>{news.content}</div>
          <div className="flex gap-10 justify-center">
            <button onClick={() => setIsEditing(true)}>
              <PencilIcon className="h-10 w-10 text-gray-500 hover:text-green-500 transition-colors duration-200" />
            </button>
            <button onClick={() => onDelete(news.id)}>
              <ArchiveBoxXMarkIcon className="h-10 w-10 text-gray-500 hover:text-red-500 transition-colors duration-200" />
            </button>
          </div>
        </>
      )}
    </article>
  );
};

export default NewsItem;
