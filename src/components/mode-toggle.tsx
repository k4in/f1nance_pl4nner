import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/shadcn/button';
import { useMode } from '@/hooks/useMode';

export function ModeToggle() {
  const { setMode } = useMode();

  function handleClick() {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <Button variant="default" size="icon" onClick={handleClick}>
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
