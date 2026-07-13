import clsx from 'clsx';
import Image from 'next/image';

import { Project } from '../data/lifeApi';
import { Badge } from './Badge';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';

interface Props {
  project: Project;
  compact?: boolean;
}

export const ProjectCard = ({ project, compact = false }: Props) => {
  return (
    <Card className="h-full" key={project.title}>
      {project.logo && !compact && (
        <div className="relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm shadow-zinc-900/5 ring-1 ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            className={clsx(
              'h-full w-full',
              project.logoInset ? 'object-contain p-3' : 'object-cover',
            )}
            unoptimized
          />
        </div>
      )}
      <div className={clsx(project.logo && !compact ? 'mt-6' : 'mt-0')}>
        {project.link ? (
          <Card.Title href={project.link.href}>{project.title}</Card.Title>
        ) : (
          <Card.Title>{project.title}</Card.Title>
        )}
      </div>
      <Card.Description>{project.description}</Card.Description>
      <div
        className={clsx('relative z-10 flex flex-wrap gap-1 font-mono', compact ? 'mt-4' : 'mt-6')}
      >
        {project.techStack.map((techStackItem) => (
          <Badge key={techStackItem}>{techStackItem}</Badge>
        ))}
      </div>
      <div
        className={clsx(
          'relative z-10 flex text-sm font-medium text-zinc-500 transition-colors group-hover:text-primary dark:text-zinc-300',
          compact ? 'mt-5' : 'mt-6',
        )}
      >
        {project.link ? (
          <p className="flex items-center">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        ) : (
          <p className="text-zinc-400">Archived</p>
        )}
      </div>
    </Card>
  );
};
