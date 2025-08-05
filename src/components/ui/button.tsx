import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';
import { INTERACTIVE_STYLES } from '@/lib/utils/styles';

type ButtonVariants = 'primary' | 'ghost' | 'destructive';
type ButtonSizes = 'default' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  children: ReactNode;
};

function getVariantStyles(variant: ButtonVariants) {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-primary-foreground hover:bg-primary/85';
    case 'ghost':
      return 'bg-transparent text-foreground hover:bg-muted';
    case 'destructive':
      return 'bg-destructive text-destructive-foreground hover:bg-destructive/85';

    default:
      return 'bg-primary text-primary-foreground hover:bg-primary/85';
  }
}

export function Button({ children, className, variant = 'primary', size = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-md shadow-md transition-colors font-semibold text-base',
        INTERACTIVE_STYLES,
        size === 'default' && 'h-8 px-3',
        size === 'icon' && 'size-8',
        getVariantStyles(variant),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
