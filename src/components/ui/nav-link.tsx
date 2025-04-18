import { cn } from '@/lib/utils/cn';

export function NavLink({ isActive, title }: { isActive: boolean; title: string }) {
  return (
    <span
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out',
        'hover:text-primary',
        'focus:outline-none focus:ring-2 focus:ring-primary/20',
        "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200",
        isActive ? 'text-primary after:scale-x-100' : 'text-foreground/80 after:scale-x-0 hover:after:scale-x-100'
      )}
    >
      {title}
    </span>
  );
}
