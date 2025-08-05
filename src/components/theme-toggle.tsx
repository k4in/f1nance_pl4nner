import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <Button onClick={toggleTheme} size="icon">
      {theme === 'light' ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}
