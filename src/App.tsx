import { useEffect, useState } from 'react';
import './App.css';
import { NewsList } from './components/NewsList';
import { NewsForm } from './components/NewsForm';

function App() {
  const [newsList, setNewsList] = useState<{ id: number; title: string; content: string }[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    setNewsList([
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' },
      { id: 4, title: 'title4', content: 'content4' },
    ]);
  }, []);

  const handleButton = () => {
    setShowForm((prev) => !prev);
  };

  const addNews = (news: { id: number; title: string; content: string }) => {
    setNewsList((prev) => [...prev, news]);
  };

  const onDelete = (id: number) => {
    setNewsList((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <>
      <button onClick={handleButton}>{!showForm ? 'Add' : 'Hide form'}</button>
      {showForm && <NewsForm onAdd={addNews} />}
      <NewsList newsList={newsList} onDelete={onDelete}></NewsList>
    </>
  );
}

export default App;
