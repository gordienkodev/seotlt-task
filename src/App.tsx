import { useEffect, useState } from 'react';
import './App.css';
import { NewsList } from './components/NewsList';

function App() {
  const [newsList, setNewsList] = useState<{ id: number; title: string; content: string }[]>([]);

  useEffect(() => {
    setNewsList([
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' },
      { id: 4, title: 'title4', content: 'content4' },
    ]);
  }, []);

  return (
    <>
      <NewsList newsList={newsList}></NewsList>
    </>
  );
}

export default App;
