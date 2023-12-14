import React from 'react';
import laptopMemoji from './assets/memojis/laptop.webp';
import shrugMemoji from './assets/memojis/shrug.webp';
import partyMemoji from './assets/memojis/party.webp';
import topHatLogo from './assets/experiences/top-hat.webp';
import searchspringLogo from './assets/experiences/searchspring.svg';
import imagineLogo from './assets/experiences/imagine-communications.webp';
import covidWatchdogImage from './assets/projects/covid-watchdog.webp';
import nggImage from './assets/projects/ngg.webp';
import personalWebsiteImage from './assets/projects/personal-website.webp';
import pokedexImage from './assets/projects/pokedex.webp';
import statsMadeEasyImage from './assets/projects/statsmadeeasy.webp';
import tracenextImage from './assets/projects/tracenext.webp';
import tictactoeImage from './assets/projects/tic-tac-toe.webp';
import personalWebsiteV2Image from './assets/projects/personal-website-v2.webp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ProjectType } from './types';
import { Link } from '@mui/material';

export const overviewContent = (
  <>
    I'm a software developer with a year of co-op experience and a fourth-year student at the
    University of Waterloo. Currently based in New York and working in{' '}
    <Link href='https://www.titan.com/' underline='hover' target='_blank' rel='noreferrer'>
      Titan
    </Link>{' '}
    as a software engineer intern.
  </>
);

export const aboutContent = [
  {
    header: (
      <>
        I make <span className='accent-text'>pretty</span> things.
      </>
    ),
    body: 'Throughout my co-ops and personal projects, I have gained extensive experience developing intuitive and accessible user interfaces. Including this one! During my exchange term, I took a master’s-level Interaction Design course to gain a deeper understanding of user-centric design principles, honing my skills in creating seamless user experiences.',
    image: laptopMemoji,
    alt: 'Memoji of me working on my laptop.',
  },
  {
    header: (
      <>
        I develop <span className='accent-text'>robust</span> systems.
      </>
    ),
    body: (
      <>
        I have hands-on experience across the entire software development lifecycle, encompassing
        tasks ranging from formulating requirements and constructing RESTful APIs to deploying code.
        I am also an{' '}
        <Link
          href='https://www.credly.com/badges/76b1bd0a-8050-47b6-a8e6-6fb08409b478/public_url'
          underline='hover'
          target='_blank'
          rel='noreferrer'
        >
          AWS Certified Solutions Architect
        </Link>{' '}
        , equipping me with the knowledge to design scalable systems that goes beyond the AWS
        environment.
      </>
    ),
    image: partyMemoji,
    alt: 'Memoji of me partying.',
  },
  {
    header: (
      <>
        I seek <span className='accent-text'>exciting</span> journeys.
      </>
    ),
    body: 'While I love my work, I also make sure to live my life to the fullest. Simple things I enjoy: Scouring the city for good coffee, long chats with cool people, and trying not to embarrass myself dancing. Though the most thrilling experience so far was going on exchange to Sweden, where I was able to meet friends from around the world, immerse myself in the culture, and witness countless breathtaking sights!',
    image: shrugMemoji,
    alt: 'Memoji of me shrugging.',
  },
];

export const badgesContent = [
  {
    id: 'python',
    icon: (
      <svg
        width='800px'
        height='800px'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Python Logo</title>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z'
          fill='url(#paint0_linear_87_8204)'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z'
          fill='url(#paint1_linear_87_8204)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_87_8204'
            x1='12.4809'
            y1='2'
            x2='12.4809'
            y2='22.7407'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#327EBD' />
            <stop offset='1' stop-color='#1565A7' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_87_8204'
            x1='19.519'
            y1='9.25928'
            x2='19.519'
            y2='30'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FFDA4B' />
            <stop offset='1' stop-color='#F9C600' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'cplusplus',
    icon: (
      <svg
        width='800px'
        height='800px'
        viewBox='-16 0 288 288'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <title>C Plus Plus Logo</title>
        <g>
          <path
            d='M255.569,84.72 C255.567,79.89 254.534,75.622 252.445,71.959 C250.393,68.357 247.32,65.338 243.198,62.951 C209.173,43.332 175.115,23.773 141.101,4.134 C131.931,-1.16 123.04,-0.967 113.938,4.403 C100.395,12.39 32.59,51.237 12.385,62.94 C4.064,67.757 0.015,75.129 0.013,84.711 C0,124.166 0.013,163.62 0,203.076 C0.002,207.8 0.991,211.985 2.988,215.593 C5.041,219.304 8.157,222.406 12.374,224.847 C32.58,236.55 100.394,275.394 113.934,283.383 C123.04,288.756 131.931,288.948 141.104,283.652 C175.119,264.012 209.179,244.454 243.209,224.835 C247.426,222.395 250.542,219.291 252.595,215.583 C254.589,211.975 255.58,207.79 255.582,203.065 C255.582,203.065 255.582,124.176 255.569,84.72'
            fill='#5C8DBC'
          ></path>
          <path
            d='M128.182,143.509 L2.988,215.593 C5.041,219.304 8.157,222.406 12.374,224.847 C32.58,236.55 100.394,275.394 113.934,283.383 C123.04,288.756 131.931,288.948 141.104,283.652 C175.119,264.012 209.179,244.454 243.209,224.835 C247.426,222.395 250.542,219.291 252.595,215.583 L128.182,143.509'
            fill='#1A4674'
          ></path>
          <path
            d='M91.101,164.861 C98.386,177.579 112.081,186.157 127.791,186.157 C143.598,186.157 157.371,177.47 164.619,164.616 L128.182,143.509 L91.101,164.861'
            fill='#1A4674'
          ></path>
          <path
            d='M255.569,84.72 C255.567,79.89 254.534,75.622 252.445,71.959 L128.182,143.509 L252.595,215.583 C254.589,211.975 255.58,207.79 255.582,203.065 C255.582,203.065 255.582,124.176 255.569,84.72'
            fill='#1B598E'
          ></path>
          <path
            d='M248.728,148.661 L239.006,148.661 L239.006,158.385 L229.282,158.385 L229.282,148.661 L219.561,148.661 L219.561,138.94 L229.282,138.94 L229.282,129.218 L239.006,129.218 L239.006,138.94 L248.728,138.94 L248.728,148.661'
            fill='#FFFFFF'
          ></path>
          <path
            d='M213.253,148.661 L203.532,148.661 L203.532,158.385 L193.81,158.385 L193.81,148.661 L184.088,148.661 L184.088,138.94 L193.81,138.94 L193.81,129.218 L203.532,129.218 L203.532,138.94 L213.253,138.94 L213.253,148.661'
            fill='#FFFFFF'
          ></path>
          <path
            d='M164.619,164.616 C157.371,177.47 143.598,186.157 127.791,186.157 C112.081,186.157 98.386,177.579 91.101,164.861 C87.562,158.681 85.527,151.526 85.527,143.893 C85.527,120.552 104.45,101.63 127.791,101.63 C143.4,101.63 157.023,110.101 164.344,122.689 L201.285,101.417 C186.602,76.071 159.189,59.019 127.791,59.019 C80.915,59.019 42.916,97.019 42.916,143.893 C42.916,159.271 47.007,173.692 54.157,186.131 C68.803,211.611 96.294,228.768 127.791,228.768 C159.346,228.768 186.88,211.542 201.505,185.987 L164.619,164.616'
            fill='#FFFFFF'
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 'react',
    icon: (
      <svg
        width='800px'
        height='800px'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>React Logo</title>
        <path
          d='M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z'
          fill='#53C1DE'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z'
          fill='#53C1DE'
        />
      </svg>
    ),
  },
  {
    id: 'typescript',
    icon: (
      <svg width='800px' height='800px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <title>TypeScript Logo</title>
        <rect x='2' y='2' width='28' height='28' rx='1.312' style={{ fill: '#3178c6' }} />
        <path
          d='M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z'
          style={{ fill: '#ffffff', fillRule: 'evenodd' }}
        />
      </svg>
    ),
  },
  {
    id: 'aws',
    icon: (
      <svg
        width='800px'
        height='800px'
        viewBox='0 -30 150 150'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Amazon Web Services Logo</title>
        <path
          d='M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z'
          fill='#F90'
        />
        <path
          d='M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z'
          fill='#F90'
        />
        <path
          d='M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z'
          fill='#252F3E'
        />
      </svg>
    ),
  },
];

export const experienceContent = [
  {
    name: 'Top Hat',
    role: 'Software Developer',
    url: 'https://tophat.com/',
    logo: topHatLogo,
    location: 'Toronto',
    startDate: new Date(2023, 0),
    endDate: new Date(2023, 3),
    tools: ['React', 'ProseMirror', 'Django', 'QuickSight', 'Datadog'],
    body: [
      'Developed features for a WCAG-compliant WYSIWYG question editor and renderer using React, Tiptap, and Prosemirror for 1M+ post-secondary students & instructors across North America.',
      'Created an optimized endpoint in Django to bulk fetch student responses, consolidating multiple API requests from the frontend and reducing page load time.',
      'Collaborated actively to refine agile team processes, shrinking cycle time by 4 days for each ticket.',
      'Outlined application observability strategies to capture critical metrics in Datadog and QuickSight.',
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
    url: 'https://searchspring.com/',
    logo: searchspringLogo,
    location: 'Toronto',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 7),
    tools: ['Go', 'Vue', 'GCP', 'Docker', 'Kubernetes'],
    body: [
      "Modernized the development environment's Docker images to compile for ARM architectures and reduced size by 6.58 GB using multi-stage builds & smaller Linux base images.",
      'Reengineered a core feature from a monolithic PHP backend into a modern Go microservice to tackle technical debt, increase test coverage, and improve code readability.',
      "Consolidated the internal Slack bot's various test commands into one, which increased available company-wide Slack API slash command capacity by 36%.",
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
    url: 'https://imaginecommunications.com/',
    logo: imagineLogo,
    location: 'Remote - Waterloo',
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 3),
    tools: ['C#', 'TypeScript', '.NET', 'Vue', 'PostgreSQL'],
    body: [
      'Redesigned a data model in the backend to accept user-defined tags while maintaining backward compatibility with previous JSON configurations using C#, .NET, and PostgreSQL.',
      'Created a new thread that emits RabbitMQ messages to handle configuration changes concurrently.',
      "Implemented default configurations in Vue, TypeScript, and C# that mirror legacy behaviours to minimize disruptions to customers' workflows when upgrading to the new GA.",
    ],
    quote:
      "Albert has been an integral member of the team this term. His work on a number of time sensitive and critical tasks have been both instrumental to the success of the team's goals, and reflect a level of work closer to that of a full-time, rather than just a co-op. With his driven and positive attitude, coupled with his eagerness to learn, Albert was a pleasure to work with this term. Great work!",
    quoteWriterName: 'Kristopher Griffin',
    quoteWriterPosition: 'Full Stack Developer',
    color: '#012B58',
    emojiClass: 'earth',
  },
];

export const projectContent = [
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
];

export const resumeInfo = {
  name: 'Resume',
  url: 'https://albertlaypersonalwebsite.s3.ca-central-1.amazonaws.com/resume-albert-lay.pdf',
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
