import type { ComponentProps, ReactNode } from 'react';

interface Props extends ComponentProps<'button'> {
  children?: ReactNode;
  variant?: 'cancel' | 'delete' | 'normal';
}

export function Button({ children, variant = 'normal', ...otherProps }: Props) {
  const variantStyles: Record<NonNullable<typeof variant>, string> = {
    cancel: 'text-red-700',
    normal: 'text-white bg-purple-700 hover:bg-purple-800',
    delete: 'text-white bg-red-700 hover:bg-red-800',
  };

  return (
    <button
      className={`rounded-full px-4 py-2 text-center text-sm ${variantStyles[variant]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
