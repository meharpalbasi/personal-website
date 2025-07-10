import clsx from 'clsx';
import React, { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
} as const;

type Props<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof variantStyles;
  loading?: boolean;
} & ComponentPropsWithRef<T>;

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    { as: Component = 'button', ...props }: Props<T>,
    ref: React.Ref<T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T>,
  ) => {
    const { className, variant = 'primary', loading, children, disabled, ...rest } = props;

    return (
      <Component
        className={clsx(
          'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
          variantStyles[variant],
          (loading || disabled) && 'opacity-50 cursor-not-allowed',
          className,
        )}
        disabled={loading || disabled}
        {...rest}
        ref={ref}
      >
        {loading && <LoadingSpinner size="sm" />}
        {children}
      </Component>
    );
  },
);

Button.displayName = 'Button';
