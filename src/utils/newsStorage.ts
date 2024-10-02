const STORAGE_KEY = 'newsList';

export const getNews = (): { id: number; title: string; content: string }[] => {
    const storedNews = localStorage.getItem(STORAGE_KEY);
    return storedNews ? JSON.parse(storedNews) : [];
};

export const saveNews = (newsList: { id: number; title: string; content: string }[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newsList));
};

export const clearNews = () => {
    localStorage.removeItem('newsList');
};
