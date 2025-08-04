import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggleButton() {
  const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="size-8 border-2 border-green-500 hover:bg-neutral-200 transition-colors flex items-center justify-center rounded-md"
    >
      {theme === 'light' ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
