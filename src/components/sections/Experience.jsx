import React from 'react';
import { Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import searchspringLogo from '../../assets/experiences/searchspring.svg';
import imagineLogo from '../../assets/experiences/imagine-communications.png';
import ihLogo from '../../assets/experiences/international-hub.png';
import mathsocLogo from '../../assets/experiences/mathsoc.png';
import { Container } from '@mui/system';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const experienceContent = [
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

// https://stackoverflow.com/questions/50890241/programmatically-add-opacity-to-a-color-in-typescript
function addAlpha(color, opacity) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

const Experience = () => {
  const [viewedExp, setViewedExp] = React.useState(experienceContent[0].name);
  const [viewedExpColor, setViewedExpColor] = React.useState(experienceContent[0].color);

  const changeViewedExp = (event, newExp) => {
    setViewedExp(newExp);
    setViewedExpColor(experienceContent[experienceContent.findIndex(e => e.name === newExp)].color);
  };
  return (
    <section className='experience' id='experiences'>
      <svg
        className='background'
        id='visual'
        viewBox='0 0 900 475'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <g fill={addAlpha(viewedExpColor, 0.2)}>
          <circle r='156' cx='-50' cy='166'></circle>
          {/* <circle r='69' cx='867' cy='55'></circle> */}
          <circle r='88' cx='879' cy='154'></circle>
          <circle r='147' cx='887' cy='321'></circle>
        </g>
      </svg>
      <Typography variant='h2'>Where have I been?</Typography>
      <Typography variant='subtitle1'>
        Places where I tried my absolute best to build features without breaking things.
      </Typography>
      <Container className='experience-tabs'>
        <TabContext value={viewedExp}>
          <TabList
            value={viewedExp}
            onChange={changeViewedExp}
            className='experience-tab-list'
            variant='scrollable'
            scrollButtons={false}
            sx={{ '& .MuiTabs-indicator': { backgroundColor: viewedExpColor } }}
          >
            {experienceContent.map(ec => (
              <Tab
                value={ec.name}
                key={ec.name}
                label={ec.name}
                sx={{ '&.Mui-selected': { fontWeight: 500, color: '#000' } }}
              />
            ))}
          </TabList>
          {experienceContent.map((ec, idx) => (
            <TabPanel key={ec.name} value={ec.name} index={idx} className='experience-tab'>
              <div className='experience-header'>
                <img src={ec.logo} alt={`${ec.name}'s logo.`} />
                <div className='experience-header-text'>
                  <Typography variant='h3' sx={{ fontWeight: 300 }}>
                    {ec.role} <span style={{ color: ec.color, fontWeight: 500 }}>@ {ec.name}</span>
                  </Typography>
                  <Typography variant='h4'>
                    {ec.location} (
                    {ec.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })} -{' '}
                    {ec.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })})
                  </Typography>
                </div>
              </div>
              <div className='experience-tools'>
                {ec.tools.map(t => (
                  <Typography key={t} variant='body1'>
                    {t}
                  </Typography>
                ))}
              </div>
              <ul className={`experience-body ${ec.emojiClass}`}>
                {ec.body.map(b => (
                  <li key={b}>
                    <Typography variant='body1'>{b}</Typography>
                  </li>
                ))}
              </ul>
              {ec.quote && (
                <div className='experience-quote'>
                  <FormatQuoteIcon />
                  <Typography variant='body1'>{ec.quote}</Typography>
                  <Typography className='quote-author' variant='body2'>
                    {ec.quoteWriterName}, {ec.quoteWriterPosition}
                  </Typography>
                </div>
              )}
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </section>
  );
};

export default Experience;
