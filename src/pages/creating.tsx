import { motion, useReducedMotion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyCurrentProjects, MyPastProjects } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';

const seoTitle = 'Creating';
const seoDescription = 'Selected products, models, and data systems built by Meharpal Basi.';

export default function Creating() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/creating`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
        title="Products, models, and data systems."
        intro="Selected work across sports analytics, machine learning, data engineering, and product development."
      >
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Selected work
        </h2>
        <p className="mt-2 max-w-2xl text-base">
          Active products where the data pipeline, analysis, and interface work together.
        </p>
        <ul role="list" className="mt-12 grid grid-cols-1 gap-x-14 gap-y-16 md:grid-cols-2">
          {MyCurrentProjects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={reduceMotion ? false : ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index % 2 === 0 ? 0 : 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>

        <h2 className="mt-28 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Earlier work
        </h2>
        <p className="mt-2 max-w-2xl text-base">
          Focused experiments that shaped the larger products above.
        </p>
        <ul role="list" className="mt-10 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
          {MyPastProjects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={reduceMotion ? false : ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index % 2 === 0 ? 0 : 0.05 }}
            >
              <ProjectCard project={project} compact />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
