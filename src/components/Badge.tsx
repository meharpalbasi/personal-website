import classNames from 'classnames';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const styles = `inline-flex items-center rounded-full hover:text-primary bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:text-primary`;

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
};

export const Badge = ({ className, children, href, onClick }: PropsWithChildren<Props>) => {
  if (href)
    return (
      <Link className={classNames(styles, className)} href={href}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={classNames(styles, className)} onClick={onClick}>
        {children}
      </button>
    );

  return <span className={classNames(styles, className)}>{children}</span>;
};
