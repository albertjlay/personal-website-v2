import React from 'react';
import { Link, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Container } from '@mui/system';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { experienceContent } from '../../content';
import { Fade } from 'react-awesome-reveal';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

// https://stackoverflow.com/questions/50890241/programmatically-add-opacity-to-a-color-in-typescript
function addAlpha(color, opacity) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

const Experience = () => {
  const [index, setIndex] = React.useState(0);
  const [viewedExpColor, setViewedExpColor] = React.useState(experienceContent[0].color);

  const handleChangeExp = (_, index) => {
    setIndex(index);
    setViewedExpColor(experienceContent[index].color);
  };
  const handleChangeExpSwipe = index => {
    setIndex(index);
    setViewedExpColor(experienceContent[index].color);
  };
  return (
    <section className='experience' id='experiences'>
      <svg
        className='background'
        id='visual'
        viewBox='0 0 900 475'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='xMidYMid'
      >
        <g fill={addAlpha(viewedExpColor, 0.2)} style={{ transition: 'fill 300ms ease-in' }}>
          <circle r='156' cx='0' cy='166'></circle>
          <circle r='88' cx='879' cy='154'></circle>
          <circle r='147' cx='887' cy='321'></circle>
        </g>
      </svg>
      <Fade triggerOnce>
        <Typography variant='h2'>Where have I been?</Typography>
        <Typography variant='subtitle1'>Places I have had the joy to work with.</Typography>
        <Container className='experience-tabs'>
          <TabContext value={index}>
            <TabList
              value={index}
              onChange={handleChangeExp}
              className='experience-tab-list'
              scrollButtons={true}
              allowScrollButtonsMobile
              centered
              variant={window.innerWidth > 800 ? 'standard' : 'scrollable'}
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: viewedExpColor },

                width: '100%',
              }}
            >
              {experienceContent.map((ec, idx) => (
                <Tab
                  value={idx}
                  key={ec.name}
                  label={ec.name}
                  sx={{
                    '&.Mui-selected': { fontWeight: 500, color: '#000' },
                  }}
                />
              ))}
            </TabList>
            <SwipeableViews axis={'x'} index={index} onChangeIndex={handleChangeExpSwipe}>
              {experienceContent.map((ec, idx) => (
                <TabPanel
                  key={ec.name}
                  value={idx}
                  index={idx}
                  className='experience-tab'
                  sx={{
                    maxWidth: '100vw',
                    backgroundColor: 'rgba(251,249,249, 0.5)',
                    borderRadius: '20px',
                  }}
                >
                  <div className='experience-header'>
                    <img src={ec.logo} alt={`${ec.name}'s logo.`} />
                    <div className='experience-header-text'>
                      <Typography variant='h3' sx={{ fontWeight: 300 }}>
                        {ec.role}{' '}
                        <span className='accent-text' style={{ color: ec.color, fontWeight: 500 }}>
                          @ <br />
                          <Link
                            href={ec.url}
                            underline='hover'
                            color={ec.color}
                            target='_blank'
                            rel='noreferrer'
                          >
                            {ec.name}
                          </Link>
                        </span>
                      </Typography>
                      <Typography variant='h4'>
                        {ec.location}{' '}
                        <span className='experience-date'>
                          (
                          {ec.startDate.toLocaleString('default', {
                            month: 'short',
                            year: 'numeric',
                          })}{' '}
                          -{' '}
                          {ec.endDate.toLocaleString('default', {
                            month: 'short',
                            year: 'numeric',
                          })}
                          )
                        </span>
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
            </SwipeableViews>
          </TabContext>
        </Container>
      </Fade>
    </section>
  );
};

export default Experience;
