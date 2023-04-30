import laptopMemoji from './assets/memojis/laptop.webp';
import shrugMemoji from './assets/memojis/shrug.webp';
import partyMemoji from './assets/memojis/party.webp';
import topHatLogo from './assets/experiences/top-hat.webp';
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
import personalWebsiteV2Image from './assets/projects/personal-website-v2.webp';
import irisImage from './assets/projects/iris.webp';
import customerChurnPredictorImage from './assets/projects/customer-churn-predictor.webp';
import projectSundayImage from './assets/projects/project-sunday.webp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import saBadge from './assets/sa-badge.webp';
import cpBadge from './assets/cp-badge.webp';
import { ProjectType } from './types';

export const aboutContent = [
  {
    header: 'I code.',
    body: 'I believe in the power of quality code, thorough documentation, and rigorous testing. With these pillars as my foundation, I have built accessible, intuitive frontend applications with React, Vue, and TypeScript, as well as designed robust backend endpoints using Django, Go, and .NET. I’m always looking for a cool, new technology to try out!',
    image: laptopMemoji,
    alt: 'Memoji of me working on my laptop.',
  },
  {
    header: 'I (try to) have fun!',
    body: 'While I *love* my work, it is not my life. Work-life balance is extremely important to me. On my free time, I scour the city for good coffee, enjoy long chats with cool people, and try not to embarass myself while dancing. I also love trying out new activities! Some of my newly discovered hobbies include skiing, boxing, and biking.',
    image: partyMemoji,
    alt: 'Memoji of me partying.',
  },
  {
    header: "I'm not sure really...",
    body: "While I'd like to pretend that I have everything figured out, I really don't. I'm still halfway through my bachelor's degree and I'm taking this time to explore all facets of software development & beyond. This includes system design, artificial intelligence, and data science. I plan to explore the field as much as I can. Not settling down just yet!",
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
    name: 'Top Hat',
    role: 'Software Developer',
    logo: topHatLogo,
    location: 'Toronto',
    startDate: new Date(2023, 0),
    endDate: new Date(2023, 3),
    tools: ['React', 'ProseMirror', 'Django', 'QuickSight', 'Datadog'],
    body: [
      'Developed features for a WCAG-compliant WYSIWYG question editor and renderer using React, Tiptap, and Prosemirror for 1 million+ post-secondary students & instructors across North America.',
      'Actively collaborated to refine team processes, shrinking cycle time by 4 days for each ticket.',
      'Outlined strategies to enhance the observability of the application by collaborating with various stakeholders to identify and capture critical metrics in Datadog and QuickSight.',
      'Created an optimized endpoint in Django to bulk fetch student responses, consolidating multiple API requests into one and reducing page load time.',
      'Updated client-side & server-side validation logic with Pydantic to enhance application reliability.',
    ],
    quote:
      'Albert did a fantastic job as a co-op, he was well beyond expectations. He even got recognized among the leadership team during one of the delivery review meetings where, just through his own efforts, he brought down the cycle time by 4 days.',
    quoteWriterName: 'Rahul Bhatt',
    quoteWriterPosition: 'Engineering Manager',
    color: '#934af3',
    emojiClass: 'top-hat',
  },
  {
    name: 'Searchspring',
    role: 'Software Developer',
    logo: searchspringLogo,
    location: 'Toronto',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 7),
    tools: ['Go', 'Vue', 'GCP', 'Docker', 'Kubernetes'],
    body: [
      "Restructured the development environment's Docker images to compile for ARM architectures and reduced size by 6.58 GB using multi-stage builds & smaller base images.",
      "Consolidated the internal Slack bot's various test commands into one, which increased available company-wide Slack API slash command capacity by 36%.",
      'Reengineered a core feature from a monolithic PHP codebase into a modern Go microservice to tackle technical debt, increase test coverage, and improve code readability.',
      'Migrated 10+ Rundeck jobs into Argo Workflows for a stronger integration with Kubernetes.',
      'Developed features for an internal task management tool using Asana API, Vue, and TypeScript.',
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
      'Redesigned a data model in the core product to accept user-defined tags while maintaining backward compatibility with previous JSON configurations using C#, .NET, and PostgreSQL.',
      "Implemented default configurations in Vue, TypeScript, and C# that mirror legacy behaviours to minimize disruptions to customers' workflows when upgrading to the new GA.",
      'Built a concurrent process that emits RabbitMQ messages when available tags are updated.',
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
    img: personalWebsiteV2Image,
    title: 'Personal Website V2',
    url: 'https://github.com/albertjlay/personal-website-v2',
    types: [ProjectType.Frontend, ProjectType.Infrastructure],
    featured: true,
    description: 'the 2022 redesign of my personal website. (This website right here!)',
  },
  {
    img: tictactoeImage,
    title: 'Tic Tac Toe',
    url: 'https://github.com/albertjlay/tic-tac-toe',
    types: [ProjectType.Frontend],
    featured: true,
    description:
      "tic tac toe equipped with an unbeatable AI implementing Newell and Simon's algorithm.",
  },
  {
    img: statsMadeEasyImage,
    title: 'Stats Made Easy',
    url: 'https://github.com/albertjlay/statsmadeeasy',
    types: [ProjectType.DataScience, ProjectType.Desktop],
    featured: true,
    description:
      'calculates probabilities modelled with the normal, binomial, and Poisson distribution.',
  },
  // {
  //   img: projectSundayImage,
  //   title: 'Project Sunday',
  //   url: 'https://github.com/albertjlay/project-sunday',
  //   types: [ProjectType.DataScience, ProjectType.Backend],
  //   featured: true,
  //   description: 'the 2022 redesign of my personal website. (This website right here!)',
  // },
  {
    img: covidWatchdogImage,
    title: 'Covid Watchdog',
    url: 'https://github.com/jaredjhe/Covid-Watchdog',
    types: [ProjectType.Frontend, ProjectType.Backend],
    description:
      'determines the risk of visiting a Canadian region based on number of Covid-19 cases and other factors.',
  },
  {
    img: personalWebsiteImage,
    title: 'Personal Website V1',
    url: 'https://github.com/albertjlay/albert-lay',
    types: [ProjectType.Frontend, ProjectType.Infrastructure],
    description: 'my first personal website.',
  },
  {
    img: pokedexImage,
    title: 'Pokédex',
    url: 'https://github.com/albertjlay/pokedex',
    types: [ProjectType.Frontend],
    description:
      'displays basic statuses for each Pokémon using data from PokeAPI and Pokeres Bastion.',
  },
  {
    img: tracenextImage,
    title: 'TraceNext',
    url: 'https://github.com/levinaind/TO-Hacks-2021',
    types: [ProjectType.Frontend, ProjectType.Backend],
    description:
      'empowers users to self-report recently-visited locations when testing positive for COVID-19 to ease contact tracing.',
  },

  {
    img: nggImage,
    title: 'Number Guessing Game',
    url: 'https://github.com/albertjlay/NGG',
    types: [ProjectType.Desktop],
    description:
      'randomly generates a number for players to guess with the help of math-based hints.',
  },
  // {
  //   img: customerChurnPredictorImage,
  //   title: 'Customer Churn Predictor',
  //   url: 'https://github.com/albertjlay/customer-churn-predictor',
  //   types: [ProjectType.DataScience],
  //   description: 'lorem',
  // },
  // {
  //   img: irisImage,
  //   title: 'Iris',
  //   url: 'https://github.com/albertjlay/iris',
  //   types: [ProjectType.DataScience],
  //   description: 'lorem',
  // },
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
