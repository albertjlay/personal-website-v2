import React from 'react';
import { Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Container } from '@mui/system';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { experienceContent } from '../../content';
import { Fade } from 'react-awesome-reveal';

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
        preserveAspectRatio='xMaxYMid'
      >
        <g fill={addAlpha(viewedExpColor, 0.2)}>
          <circle r='156' cx='-50' cy='166'></circle>
          {/* <circle r='69' cx='867' cy='55'></circle> */}
          <circle r='88' cx='879' cy='154'></circle>
          <circle r='147' cx='887' cy='321'></circle>
        </g>
      </svg>
      <Fade triggerOnce>
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
              sx={{ '& .MuiTabs-indicator': { backgroundColor: viewedExpColor }, width: '100%' }}
            >
              {experienceContent.map(ec => (
                <Tab
                  value={ec.name}
                  key={ec.name}
                  label={ec.name}
                  sx={{
                    '&.Mui-selected': { fontWeight: 500, color: '#000' },
                  }}
                />
              ))}
            </TabList>
            {experienceContent.map((ec, idx) => (
              <TabPanel
                key={ec.name}
                value={ec.name}
                index={idx}
                className='experience-tab'
                sx={{
                  maxWidth: '100vw',
                }}
              >
                <div className='experience-header'>
                  <img src={ec.logo} alt={`${ec.name}'s logo.`} />
                  <div className='experience-header-text'>
                    <Typography variant='h3' sx={{ fontWeight: 300 }}>
                      {ec.role}{' '}
                      <span style={{ color: ec.color, fontWeight: 500 }}>@ {ec.name}</span>
                    </Typography>
                    <Typography variant='h4'>
                      {ec.location} (
                      {ec.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })}{' '}
                      - {ec.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })})
                    </Typography>
                  </div>
                </div>
                <div className='experience-tools'>
                  {ec.tools.map(t => (
                    <Typography key={t} className='experience-tool' variant='body1'>
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
      </Fade>
    </section>
  );
};

export default Experience;
