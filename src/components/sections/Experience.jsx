import React from 'react';
import { Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import searchspringLogo from '../../assets/experiences/searchspring.svg';
import imagineLogo from '../../assets/experiences/imagine-communications.png';
import ihLogo from '../../assets/experiences/international-hub.png';
import mathsocLogo from '../../assets/experiences/mathsoc.png';
import { Container } from '@mui/system';

const experienceContent = [
  {
    name: 'Searchspring',
    role: 'Software Developer',
    logo: searchspringLogo,
    location: 'Toronto',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 7),
    tools: ['Go', 'Vue', 'GCP', 'Docker', 'Kubernetes'],
    body: ['lorem', 'lorem', 'lorem3'],
    quote: 'lorem',
  },
  {
    name: 'Imagine Communications',
    role: 'Full Stack Web Developer',
    logo: imagineLogo,
    location: 'Remote - Waterloo',
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 3),
    tools: ['C#', 'TypeScript', '.NET', 'Vue', 'PostgreSQL'],
    body: ['lorem', 'lorem', 'lorem3'],
    quote: 'lorem',
  },
  {
    name: 'International Hub',
    role: 'Web Developer',
    logo: ihLogo,
    location: 'Remote - Toronto',
    startDate: new Date(2021, 6),
    endDate: new Date(2021, 9),
    tools: ['React', 'Sass', 'Jest', 'ESLint'],
    body: ['lorem', 'lorem', 'lorem3'],
  },
  {
    name: 'UW MathSoc',
    role: 'Website Developer',
    logo: mathsocLogo,
    location: 'Remote - Waterloo',
    startDate: new Date(2021, 0),
    endDate: new Date(2021, 3),
    tools: ['WordPress'],
    body: ['lorem', 'lorem', 'lorem3'],
  },
];

const Experience = () => {
  const [viewedExp, setViewedExp] = React.useState(experienceContent[0].name);

  const changeViewedExp = (event, newExp) => {
    setViewedExp(newExp);
  };
  return (
    <section className='experience'>
      <Typography variant='h2'>Where have I been?</Typography>
      <Typography variant='subtitle1'>
        Places where I tried my absolute best to build features without breaking things.
      </Typography>
      <Container>
        <TabContext value={viewedExp}>
          <TabList value={viewedExp} onChange={changeViewedExp}>
            {experienceContent.map(ec => (
              <Tab value={ec.name} key={ec.name} label={ec.name} />
            ))}
          </TabList>
          {experienceContent.map((ec, idx) => (
            <TabPanel key={ec.name} value={ec.name} index={idx}>
              <div>
                <img src={ec.logo} alt={`${ec.name}'s logo.`} />
                <div>
                  <Typography variant='h3'>
                    {ec.role} @ {ec.name}
                  </Typography>
                  <Typography variant='h4'>
                    {ec.location} (
                    {ec.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })} -{' '}
                    {ec.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })})
                  </Typography>
                </div>
              </div>
              <div>
                {ec.tools.map(t => (
                  <Typography variant='body1'>{t}</Typography>
                ))}
              </div>
              <ul>
                {ec.body.map(b => (
                  <li>
                    <Typography variant='body1'>{b}</Typography>
                  </li>
                ))}
              </ul>
              {ec.quote && <Typography variant='body1'>{ec.quote}</Typography>}
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </section>
  );
};

export default Experience;
