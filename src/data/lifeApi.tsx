import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import EvercastLogo from '../images/logos/evercast.svg';
import JarockiMeLogo from '../images/logos/jarocki.svg';
import Minimal from '../images/logos/minimal.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import LHVLogo from '../images/logos/uk-thumb-3.png'
import PentaLogo from '../images/logos/penta.jpg'

export const Name = 'Meharpal Basi';

export const About = (
  <>
    {`Data Analyst, just trying to create things,`}{' '}
    <ExternalLink href="mailto:meharpalbasi45@gmail.com">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `I live in London, England I have a bachelor's degree in Economics from the University of Warwick. I like Data, Travelling, Financial Markets, Football, The NFL and subsequently Sports Betting.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'UK Data Jobs',
    techStack: ['Side Project', 'Next.js', 'TypeScript'],
    description: 'A Job Board for Data Jobs in the UK',
    logo: EvercastLogo,
    link: {
      label: 'ukdatajobs.com',
      href: 'https://ukdatajobs.com',
    },
  },
  {
    title: 'Premier League Overs and Unders',
    techStack: ['Side Project', 'Next.js', 'Prisma', 'Auth.js', 'SQLite'],
    description: 'An app that allows users to bet on the outcome of the Premier League player props',
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/premier_league_predictor',
    },
  },
  {
    title: 'FPL Analyzer',
    techStack: ['Side Project', 'Next.js'],
    description: 'An app that allows users to bet on the outcome of the Premier League',
    logo: EvercastLogo,
    link: {
      label: 'fplanaly.st',
      href: 'https://fplanaly.st/',
    },
  },
  {
    title: 'LFC Analytics',
    techStack: ['Side Project', 'Python', 'Scraping', 'R', 'MPLSoccer'],
    description: 'A twitter account dedicated to match reports and analysis of Liverpool FC. All graphics/stats are created in R or Python (using mplsoccer). Data is scraped from WhoScored/Fotmob/Sofascore',
    logo: EvercastLogo,
    link: {
      label: 'X',
      href: 'https://x.com/LFCAnalytic',
    },
  },
  {
    title: 'FPL Player xPoints Model',
    techStack: ['Python', 'Machine Learning', 'SKLearn', 'Random Forest'],
    description: 'An open source model that predicts the xPoints of FPL players based on their performance',
    logo: EvercastLogo,
    link: {
      label: 'Github',
      href: 'https://github.com/meharpalbasi/xPoints',
    },
  },
  {
    title: 'NBA Line Up Analyzer',
    techStack: ['Side Project', 'Python', 'Next.Js'],
    description: 'Application that breaks down advanced analytics of all NBA lineups from the 2024-2025 season, inspired by my Streamlit version',
    logo: EvercastLogo,
    link: {
      label: 'nbalineup.vercel.app',
      href: 'https://nbalineup.vercel.app/',
    },
  },
  {
    title: 'FPL Player and Team Dashboard',
    techStack: ['Side Project', 'Next.js'],
    description: 'A dashboard that allows users to viewstats of players and teams in FPL',
    logo: EvercastLogo,
    link: {
      label: 'Vercel',
      href: 'https://fps-player-app.vercel.app',
    },
  },
  {
    title: 'FPL Price Change Bot',
    techStack: ['Side Project', 'Python', 'Telegram API','Railway'],
    description: 'A telegram bot that sends you the price changes of FPL players daily',
    logo: EvercastLogo,
    link: {
      label: 'Telegram',
      href: 'https://web.telegram.org/a/#-1002392242605',
    },
  },
  {
    title: 'Resume.me',
    techStack: ['Side Project', 'Next.js', 'TypeScript'],
    description: 'My Resume which you can access on the website you are currently on, built with Next.js.',
    logo: JarockiMeLogo,
    link: {
      label: 'meharpalbasi.fyi',
      href: 'https://www.meharpalbasi.fyi',
    },
  },
  {
    title: 'meharpalbasi.com',
    techStack: ['Side Project', 'Next.js', 'Notion API'],
    description: 'The Website you are currently on, built with Next.js',
    logo: Minimal,
    link: {
      label: 'meharpalbasi.com',
      href: 'meharpalbasi.com',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'NFL Interception Model',
    techStack: ['Python', 'DataScience', 'SKLearn', 'Data Science'],
    description: "In this project I use the NFL's play by play data to calculate which Quarterbacks under-performed vs over-performed their expected amount of interceptions. In this model I use a logistic regression, random forest and an XGBOOST model; calculating subsequent Brier scores.",
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/interception_modelling',
    },
  },
  {
    title: 'NFL Rush Yards Overexpected Model',
    techStack: ['Python', 'DataScience', 'SKLearn', 'Data Science'],
    description: "In this project I use the NFL's play by play data to calculate which Running Backs over-performed their expected amount of rushing yards. In this model I use a XGBOOST model.",
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/rushyardsoverexpected',
    },
  },
  {
    title: 'NBA Line Up Analyzer',
    techStack: ['Side Project', 'Python', 'Streamlit'],
    description: 'Application that breaks down advanced analytics of all NBA lineups from the 2023-2024 season',
    logo: EvercastLogo,
    link: {
      label: 'streamlit.io',
      href: 'https://nbalineupanalyzer.streamlit.app',
    },
  },
  {
    title: 'Who\'s the best Kicker in the NFL?',
    techStack: ['Python', 'DataScience', 'SKLearn', 'Data Science'],
    description: "In this project I use the NFL's play by play data to calculate which Kicker over-performed their expected amount of Field Goals. In this model I use a random forest model. P.S It's Chris Boswell",
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/Kicking-Over-Expected',
    },
  },
  {
    title: 'S&P500 Analyzer',
    techStack: [
      'Streamlit',
      'Python',
      'Yahoo Finance API',
    ],
    description:
      'In this Streamlit program I visualize the top gainers and losers of the S&P500 within a chosen timeframe.',
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/equity-dashboard',
    },
  },
  {
    title: 'NFL Quarterback Through the Seasons',
    techStack: ['Python', 'Streamlit'],
    description: 'In this streamlit application I use the NFL play by play data to visualize NFL Quarterbacks cumulative Passing Yards, Touchdowns and Interceptions through the weeks.',
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/NFL-Quarterback-App',
    },
  },
  {
    title: 'FBREF Scraper',
    techStack: ['Python', 'Airflow'],
    description: 'Scrapes, combines and cleans data from FBREFs top 5 leagues and schedules it to a Postgres Database',
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/Football_Reference_Scraper_And_Cleaner/tree/main',
    },
  },
  {
    title: 'Compare your portfolio to the S&P500',
    techStack: ['Python', 'Streamlit'],
    description: 'A Streamlit application that allows you to compare your portfolio to the S&P500, with risk and return analysis',
    logo: EvercastLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/meharpalbasi/Portfolio-Analysis',
    },
  },
  {
    title: 'FPL User Analysis',
    techStack: ['Side Project', 'Python', 'Streamlit'],
    description: 'Application that shows you your FPL team performance and how you compare to the average FPL user as well as history',
    logo: EvercastLogo,
    link: {
      label: 'streamlit.io',
      href: 'https://fpluser.streamlit.app',
    },
  },
];

export const SocialMedia = [
  { name: 'Instagram', link: 'https://www.instagram.com/_msb3/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/meharpalbasi', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/meharpal-basi/', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'LHV Bank',
    title: 'Data Analyst',
    logo: LHVLogo,
    start: 'Feb 2023',
    end: 'Now',
  },
  {
    company: 'Penta Group',
    title: 'Insights Analyst',
    logo: PentaLogo,
    start: 'Jan 2022',
    end: 'Feb 2023',
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
  {
    name: 'DKMS',
    link: 'https://www.dkms.org/en',
  },
  {
    name: 'AAA',
    link: 'https://www.aaa.com/',
  },
  {
    name: 'PolskaPress',
    link: 'https://polskapress.pl/pl',
  },
  {
    name: 'Canal Digital',
    link: 'https://www.canaldigital.no/',
  },
] as const;

export const Books = [
  {
    name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
    link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
  },
  {
    name: 'Winning: The Unforgiving Race to Greatness by Tim Grover',
    link: 'https://www.amazon.co.uk/Winning-Unforgiving-Race-Greatness-Grover/dp/1982168862',
  },
  {
    name: 'The $100 Startup by Chris Guillebeau',
    link: 'https://www.amazon.co.uk/100-Startup-Fire-Your-Better-ebook/dp/B007WTR2W6/ref=sr_1_1?crid=CRKM2XV40J0J&dib=eyJ2IjoiMSJ9.TJG0Y_5gdWAY6GH8ng24FpKhGXUIYR1H3HXwTpUjMMNDEJjgPohMtORGqKHY2Ay-QWyRrYhZPXy4gQkzpOtkEFjtbwi8Ww45tgf7W8fdT0wPMP9LQKIjXNehR_qh3m6FDBdI1xyf_alRoWfNUemlf96AKtZrO5-8k5KFSFRhBVyomThvi84kAwuQLt-7T5NUwZAZop9--ZJQQybe49LFIFJeQ3yXNvmfuwRtgLpJ0c8.FmDCUbayqKclcossfo5GIZ-1GoTMgb3j-N9_gCYKy7E&dib_tag=se&keywords=100+dollar+startup&nsdOptOutParam=true&qid=1728600645&s=books&sprefix=100+dollar+startuo%2Cstripbooks%2C97&sr=1-1',
  },
  {
    name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3kbvaD9',
  },
  {
    name: 'Daily stoic by Ryan Holiday',
    link: 'https://amzn.to/3n8ATuC',
  },
  {
    name: 'Football Hackers: The Science and Art of a Data Revolution by Christoph Biermann',
    link: 'https://www.amazon.co.uk/Football-Hackers-Science-Data-Revolution/dp/1788702050/ref=sr_1_1?crid=28BGK4SPBEAOT&dib=eyJ2IjoiMSJ9.4deoGiMHNAK82srfvms0vxoZ3rb55-tkzFwhB5cu0kAEOciQgd5LXEnehzgtJlIcTnU06R8Fm8NYZWpc-SUuGvnzXSfZOs7AqJiCuCA9xEhXjiejA6VURA75h83igimq1tgGgmd7oZdd79dKElDGeDt9i4kR7GKnUSr82pGZs2mIxJqDPB_aExYSI85g2zzaQA8_5lRnX9nvZoK7V12CmgaLE_LH-o3bsteO8PqD66E.HkpwoFMLCvHejfRzVquMQVcnNmKAeKE-9YLFNZfZ8cU&dib_tag=se&keywords=football+hackers&nsdOptOutParam=true&qid=1728600821&s=books&sprefix=football+hacke%2Cstripbooks%2C82&sr=1-1',
  },
  {
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life by Hector Garcia and Francesc Miralles',
    link: 'https://www.amazon.co.uk/Ikigai-Japanese-Secret-Long-Happy/dp/B0759VH4Q9/ref=sr_1_1?crid=H1RVFA874FR0&dib=eyJ2IjoiMSJ9.7RSV1zQ3xomjXijbPW3bf5MZSrkwk4K2sZfXkCG-bwszcQTaFRV2urJ-uRlfQ-EItQs1oAOq7h51CMYsSp7ruNAquvrMuwR4FGtDhBMeX8--qWDJuHDY6_-LlvwqsGTJ2nND7y2eK2EIoeCdsUiwOQMk5oZFEsg29Yb8lWxuPsUwKHMV4V1GTldGv-gqccXp9n2-LRau4CyNZEM8BZtFUyk2aXFam9X4vTWBqCNGlkg.V_yHwXbjWb4xcXSqBljPJ2Pj9rNxyw6nNouQ4v3V9Ag&dib_tag=se&keywords=ikigai&nsdOptOutParam=true&qid=1728600877&s=books&sprefix=ikigai%2Cstripbooks%2C73&sr=1-1',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    name: 'Falcon Heavy & Starman',
    link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
  },
] as const;

export const Podcasts = [
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
  {
    name: 'Huberman Lab',
    link: 'https://www.youtube.com/@hubermanlab',
  },
  {
    name: 'Joe Rogan',
    link: 'https://www.youtube.com/@joerogan',
  },
  {
    name: 'The Tim Ferriss Show',
    link: 'https://www.youtube.com/channel/UCznv7Vf9nBdJYvBagFdAHWw',
  },
  {
    name: 'Build your SaaS',
    link: 'https://saas.transistor.fm/',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Naval',
    link: 'https://x.com/naval',
  },
  {
    name: 'Oliur',
    link: 'https://twitter.com/UltraLinx',
  },
  {
    name: 'Coltybrah',
    link: 'https://x.com/coltybrah',
  },
  {
    name: "Marc Lou",
    link: 'https://x.com/marc_louvion',
  },
  {
    name: 'Jon Yongfook',
    link: 'https://twitter.com/yongfook',
  },
  {
    name: 'Pieter Levels',
    link: 'https://twitter.com/levelsio',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
  {
    name: 'Farnam Street',
    link: 'https://fs.blog',
  },
  {
    name: 'Naval Ravikant',
    link: 'https://nav.al/',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: '15.3” MacBook Air, M3, 16GB RAM (2023)',
      description:
        "This laptop is a great machine that can handle virtually I've thrown at it, making it a worthwhile investment for anyone looking for a reliable and powerful laptop that can be used for years.",
      href: 'https://www.amazon.co.uk/Apple-2024-MacBook-15-inch-Laptop/dp/B0CX2549J4/ref=sr_1_4?crid=1UMS6XD13WQ8Z&dib=eyJ2IjoiMSJ9.08X3kXEB-BcYYBnDZuf5cFIf8c6_lPLK4OXAG9PkEDAZzhNXPx0-3z64Yp-JkWibjHNH0AclSsoN8GGxq9DGIilVXxFOdoYKnYrbFC2FTFTULhCgHA3STdacRkryXfMZ9ECKBkvoH0d3jmR2T5Q0yw.rmroJboq3G2KOtpYJH5G0RvxqPF23jYgeFNjSV6TznU&dib_tag=se&keywords=m3+air&nsdOptOutParam=true&qid=1727885334&sprefix=m3+air+%2Caps%2C91&sr=8-4&ufe=INHOUSE_INSTALLMENTS%3AUK_IHI_5M_APPLE_SUP1200',
    },
    {
      title: 'Samsung UR59C 4K Curved Monitor',
      description:
        "4K Resolution which helps with working for long periods of time as it is more comfortable on the eyes. Only 60hz refresh rate but it;s greate for the price" ,
      href: 'https://www.amazon.co.uk/32-UR59C-Curved-UHD-Monitor/dp/B09HSCHZLH',
    },
    {
      title: 'ThinkPad T14s Gen 3 (Intel)',
      description:
        'This is my work machine which I use for my scripts and data analysis. Im not a fan of Windows but this machine is a beast and I love the ergonomic design of the keyboard. Makes those long work days more bearable.',
      href: 'https://www.amazon.co.uk/Lenovo-ThinkPad-i7-1355U-LPDDR5x-SDRAM-802-11ax/dp/B0CJMQ2XM4/ref=sr_1_6?crid=2UJEZRP0S9Y9G&dib=eyJ2IjoiMSJ9.bORwMeBtSjCB5bv4X9JH4lSj00mlamS4l58nPFMhs38uCONgGdCempHZKZNYBLsM4g01cQu1fLbKOJIIrTO5djNacf9P2kQtb6FqEcWKyn38GEbw9uaBGgapIbnNx6tRtMIWiC3qxovsLKoCeum8-lY-TjJKGsgbZz5HBFuxHn34YYzBeqM4k8RoaoDVgw0cbJUDw-yRWhYuafja8VSA_qoMBmnrO31Tpe7hWXok-pI.jSZIvyuzdS99fYJ6gB8qzFYL9REqlj_y-eppGSeG4nY&dib_tag=se&keywords=thinkpad+t14s+intel&nsdOptOutParam=true&qid=1727885921&sprefix=thinkpad+t14s+intel%2Caps%2C114&sr=8-6&ufe=app_do%3Aamzn1.fos.16386313-b7bf-4b29-bfa1-0d3d5f3a0dd5',
    },
    {
      title: 'Logitech MX Master 3',
      description: "Because the Apple Magic Mouse sucks and this is the only mouse that doesn't lag with my Macbook",
      href: 'https://amzn.to/3qXIvXl',
    },
    {
      title: 'The Brick',
      description: "I get distracted way too easily, so I use this to block distracting websites and apps on my phone. The act of scanning the brick works better than any app I've tried",
      href: 'https://getbrick.app/?srsltid=AfmBOoobMEyT-K3rqn1XIRAk-VGE-rxX1Wk48pnWCjAlIAbRpVGCDSfy',
    },
  ],
  Software: [
    {
      title: 'Visual Studio Code',
      description: `First code editor I've used and only one my companies IT will approve of. Great Editor`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'Cursor',
      description: `VS Code but for your codebase, has made creating frontends for my app way easier and writing this description way easier`,
      href: 'https://www.cursor.com',
    },
    {
      title: 'MongoDB',
      description: `Just super easy to use for my personal projects`,
      href: 'https://www.mongodb.com',
    },
    {
      title: 'DBeaver',
      description: `Great tool for working with databases`,
      href: 'https://dbeaver.io/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Metabase',
      description: `Use this primarily at work. I like the interface and how easy it is to create reports, visualizations and data models`,
      href: 'https://www.metabase.com',
    },
  ],
} as const;
