import { compareDesc } from 'date-fns';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { Resume } from '../components/Resume';
import { SocialLink } from '../components/SocialLink';
import { NotePreview } from '../components/notes/NotePreview';
import { About, Name, SocialMedia } from '../data/lifeApi';
import { Note, notesApi } from '../lib/notesApi';

const seoTitle = 'Meharpal Basi';
const seoDescription =
  'Data Analyst based in London, England with a passion for creating data applications.';

type Props = {
  latestNotes: Note[];
};

export default function Home({ latestNotes }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Meharpal Basi",
    "jobTitle": "Data Analyst",
    "description": "Data Analyst based in London, England with a passion for creating data applications",
    "url": "https://www.meharpalbasi.com",
    "image": "https://www.meharpalbasi.com/assets/blog/authors/meharpal.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/meharpal-basi/",
      "https://github.com/meharpalbasi",
      "https://www.instagram.com/_msb3/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "LHV Bank"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "University of Warwick"
    },
    "knowsAbout": [
      "Data Analysis",
      "Python",
      "Machine Learning",
      "TypeScript",
      "Next.js",
      "Sports Analytics",
      "SQL",
      "Data Science"
    ]
  };

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {latestNotes.map((blogPost) => (
              <NotePreview key={blogPost.slug} note={blogPost} dense />
            ))}
          </div>
          <div className="lg:ml-auto space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

const NEWEST_POSTS_TO_DISPLAY = 5;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const latestNotes = await notesApi.getNotes('desc', NEWEST_POSTS_TO_DISPLAY);

  return {
    props: { latestNotes },
    revalidate: 10,
  };
};
