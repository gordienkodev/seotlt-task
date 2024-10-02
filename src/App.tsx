import { useEffect, useState } from 'react';
import { NewsList } from './components/NewsList';
import { NewsForm } from './components/NewsForm';
import { clearNews, getNews, saveNews } from './utils/newsStorage';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/16/solid';

function App() {
  const [newsList, setNewsList] = useState<{ id: number; title: string; content: string }[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const storedNews = getNews();
    setNewsList(storedNews);
  }, []);

  useEffect(() => {
    if (newsList.length > 0) {
      saveNews(newsList);
    }
  }, [newsList]);

  const handleButton = () => {
    setShowForm((prev) => !prev);
  };

  const addNews = (news: { id: number; title: string; content: string }) => {
    setNewsList((prev) => [...prev, news]);
    setShowForm(false);
  };

  const onDelete = (id: number) => {
    setNewsList((prev) => {
      const updatedList = prev.filter((item) => item.id !== id);

      if (updatedList.length === 0) {
        clearNews();
      }

      return updatedList;
    });
  };

  const editNews = (id: number, title: string, content: string) => {
    setNewsList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title, content } : item)),
    );
  };

  return (
    <section className="flex flex-col bg-gray-100 items-center justify-center gap-10">
      <button onClick={handleButton}>
        {!showForm ? (
          <PencilSquareIcon className="h-20 w-20 text-gray-500 hover:text-green-500 transition-colors duration-200" />
        ) : (
          <XMarkIcon className="h-10 w-10 text-gray-500 hover:text-red-500 transition-colors duration-200" />
        )}
      </button>
      {showForm && <NewsForm onAdd={addNews} />}
      <NewsList newsList={[...newsList].reverse()} onDelete={onDelete} onEdit={editNews}></NewsList>
    </section>
  );
}

export default App;
