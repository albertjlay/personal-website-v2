import laptopMemoji from './assets/memojis/laptop.webp';
import shrugMemoji from './assets/memojis/shrug.webp';
import partyMemoji from './assets/memojis/party.webp';
import searchspringLogo from './assets/experiences/searchspring.svg';
import imagineLogo from './assets/experiences/imagine-communications.webp';
import ihLogo from './assets/experiences/international-hub.webp';
import mathsocLogo from './assets/experiences/mathsoc.webp';
import covidWatchdogImage from './assets/projects/covid-watchdog.webp';
import nggImage from './assets/projects/ngg.webp';
import personalWebsiteImage from './assets/projects/personal-website.webp';
import pokedexImage from './assets/projects/pokedex.webp';
import statsMadeEasyImage from './assets/projects/statsmadeeasy.webp';
import tracenextImage from './assets/projects/tracenext.webp';
import tictactoeImage from './assets/projects/tic-tac-toe.webp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import saBadge from './assets/sa-badge.webp';
import cpBadge from './assets/cp-badge.webp';
import { ProjectType } from './types';

export const aboutContent = [
  {
    header: 'I code.',
    body: "I believe in the power of quality code, thorough documentation, and rigorous testing. With these pillars as my foundation, I have built modular, component-based frontend softwares with React, Vue, and TypeScript. I also have experience designing robust backend systems using Go, C#, and .NET. I'm always looking for a cool, new technology to try out!",
    image: laptopMemoji,
    alt: 'Memoji of me working on my laptop.',
  },
  {
    header: 'I (try) to have fun!',
    body: 'While I *love* my work, it is not my life. Work-life balance is extremely important to me. On my free time, I scour the city for good food, enjoy long chats with good buddies, and lose in both League & Smash. I also love trying out new activities! Some of my newly discovered hobbies include skiing, boxing, and blogging.',
    image: partyMemoji,
    alt: 'Memoji of me partying.',
  },
  {
    header: "I'm not sure really...",
    body: "While I'd like to pretend that I have everything figured out, I really don't. I'm still halfway through my bachelor's degree and I'm taking this time to explore all facets of software development & beyond. This includes system design, data science, and product management. It's been extremely fun exploring these multiple facets of computer science!",
    image: shrugMemoji,
    alt: 'Memoji of me shrugging.',
  },
];

export const badgesContent = [
  {
    image: saBadge,
    alt: 'AWS Certified Solutions Architect Associate badge.',
    url: 'https://www.credly.com/badges/76b1bd0a-8050-47b6-a8e6-6fb08409b478/public_url',
  },
  {
    image: cpBadge,
    alt: 'AWS Certified Cloud Practioner badge.',
    url: 'https://www.credly.com/badges/f888cf33-9d91-467c-ab07-9f33c858c7be/public_url',
  },
];

export const experienceContent = [
  {
    name: 'Searchspring',
    role: 'Software Developer',
    logo: searchspringLogo,
    location: 'Toronto',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 7),
    tools: ['Go', 'Vue', 'GCP', 'Docker', 'Kubernetes'],
    body: [
      "Restructured the development environment's Docker images to compile for ARM architectures and reduced cumulative size by 6.58 GB using various optimizations.",
      "Consolidated the internal Slack bot's various test commands into one, which increased available company-wide Slack API command capacity by 36%.",
      'Reengineered a core feature from a monolithic PHP codebase into a modern Go microservice to tackle technical debt, increase test coverage, and improve code readability.',
    ],
    quote:
      'Albert has proven to be an outstanding co-op. He showed initiative at every step of the way, constantly seeking to learn new technologies that would help both Searchspring and his future career. He actively built relationships with many other employees and proved to be an extremely effective collaborator. He did not hesitate to ask questions and offer feedback on how he could best be utilized during his time at Searchspring.',
    quoteWriterName: 'Stephen Smart',
    quoteWriterPosition: 'Engineering Team Lead',
    color: '#4b3ce1',
    emojiClass: 'purple-heart',
  },
  {
    name: 'Imagine Communications',
    role: 'Full Stack Web Developer',
    logo: imagineLogo,
    location: 'Remote - Waterloo',
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 3),
    tools: ['C#', 'TypeScript', '.NET', 'Vue', 'PostgreSQL'],
    body: [
      'Redesigned a data model in the core product to accept user-defined tags while maintaining backward compatibility with previous JSON configurations.',
      'Built a concurrent process that emits RabbitMQ messages when available tags are updated.',
      "Implemented default configurations that mirror legacy behaviours to minimize disruptions to customers' workflows when upgrading to the new GA.",
    ],
    quote:
      "Albert has been an integral member of the team this term. His work on a number of time sensitive and critical tasks have been both instrumental to the success of the team's goals, and reflect a level of work closer to that of a full time- rather than just a coop. With his driven and positive attitude, coupled with his eagerness to learn, Albert was a pleasure to work with this term. Great work!",
    quoteWriterName: 'Kristopher Griffin',
    quoteWriterPosition: 'Full Stack Developer',
    color: '#012B58',
    emojiClass: 'earth',
  },
  {
    name: 'International Hub',
    role: 'Web Developer',
    logo: ihLogo,
    location: 'Remote - Toronto',
    startDate: new Date(2021, 6),
    endDate: new Date(2021, 9),
    tools: ['React', 'Sass', 'Jest', 'ESLint'],
    body: [
      'Headed the development of the redesigned website to serve 1600+ community members.',
      'Transformed design mocks into a fully functional SPA using a modular component architecture',
    ],
    color: '#BA78D7',
    emojiClass: 'octopus',
  },
  {
    name: 'UW MathSoc',
    role: 'Website Developer',
    logo: mathsocLogo,
    location: 'Remote - Waterloo',
    startDate: new Date(2021, 0),
    endDate: new Date(2021, 3),
    tools: ['WordPress'],
    body: [
      'Spearheaded the development of the MathSoc Cartoons page in collaboration with their coordinator, which houses 18 comics created over 3 terms.',
      'Updated website with events targeted to 8,000+ students in the Faculty of Mathematics.',
    ],
    color: '#C50078',
    emojiClass: 'cherry-blossom',
  },
];

export const projectContent = [
  // {
  //   img: cc3kImage,
  //   title: 'CC3K',
  //   url: '',
  // },
  {
    img: covidWatchdogImage,
    title: 'Covid Watchdog',
    url: 'https://github.com/jaredjhe/Covid-Watchdog',
    types: [ProjectType.Frontend, ProjectType.Backend],
  },
  {
    img: tictactoeImage,
    title: 'Tic Tac Toe',
    url: 'https://github.com/albertjlay/tic-tac-toe',
    types: [ProjectType.Frontend],
  },
  {
    img: personalWebsiteImage,
    title: 'Personal Website V1',
    url: 'https://github.com/albertjlay/albert-lay',
    types: [ProjectType.Frontend, ProjectType.Infrastructure],
  },
  {
    img: pokedexImage,
    title: 'Pokedex',
    url: 'https://github.com/albertjlay/pokedex',
    types: [ProjectType.Frontend],
  },
  {
    img: tracenextImage,
    title: 'TraceNext',
    url: 'https://github.com/levinaind/TO-Hacks-2021',
    types: [ProjectType.Frontend, ProjectType.Backend],
  },
  {
    img: statsMadeEasyImage,
    title: 'Stats Made Easy',
    url: 'https://github.com/albertjlay/statsmadeeasy',
    types: [ProjectType.DataScience, ProjectType.Desktop],
  },
  {
    img: nggImage,
    title: 'NGG',
    url: 'https://github.com/albertjlay/NGG',
    types: [ProjectType.Desktop],
  },
];

export const resumeInfo = {
  name: 'Resume',
  url: 'https://albertlaypersonalwebsite.s3.ca-central-1.amazonaws.com/albert-lay-resume-f22.pdf',
};
export const emailInfo = {
  name: 'Email',
  url: "mailto:albertjlay@gmail.com?subject=Hi%2C%20let's%20work%20together!&body=Tell%20me%20what's%20the%20email%20about%20and%20I'll%20get%20back%20to%20you%20as%20soon%20as%20possible.%0D%0A%0D%0AIn%20the%20meantime%2C%20have%20a%20nice%20day!",
  icon: MailOutlineIcon,
};
export const githubInfo = {
  name: 'GitHub',
  url: 'https://github.com/albertjlay/',
  icon: GitHubIcon,
};
export const linkedinInfo = {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/albertjlay/',
  icon: LinkedInIcon,
};

export const socialContent = [resumeInfo, emailInfo, githubInfo, linkedinInfo];
