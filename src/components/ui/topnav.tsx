import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils/cn';
import { LayoutGrid, BarChart3, Settings } from 'lucide-react';
import { INTERACTIVE_STYLES } from '@/lib/utils/styles';

export function Topnav() {
  return (
    <nav className="flex items-center gap-1 rounded-full bg-muted p-1.5">
      <Link to="/" className={navItemStyles} activeProps={{ className: 'bg-primary text-primary-foreground' }}>
        <LayoutGrid className="h-4 w-4" />
        Overview
      </Link>

      <Link to="/charts" className={navItemStyles} activeProps={{ className: 'bg-primary text-primary-foreground' }}>
        <BarChart3 className="h-4 w-4" />
        Charts
      </Link>

      <Link to="/settings" className={navItemStyles} activeProps={{ className: 'bg-primary text-primary-foreground' }}>
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </nav>
  );
}

const navItemStyles = cn(
  'flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground',
  'transition-colors duration-200 ease-in-out',
  'hover:text-foreground',
  INTERACTIVE_STYLES,
  'focus-visible:ring-offset-muted'
);
