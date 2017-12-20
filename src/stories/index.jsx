import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Welcome } from '@storybook/react/demo';

import PortfolioContainer from '../portfolioContainer/PortfolioContainer';
import iPhonePortImage from '../assets/00_iphone_startup.png';
import iPadPortImage from '../assets/01_ipad_startup.png';
import iPhoneLandImage from '../assets/02-iphone-pea-device-dashboard-land-1.png';
import iPadLandImage from '../assets/07-ipad-fdm-device-dashboard-land.png';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const contents = [
  {
    title: 'de Finibus Bonorum et Malorum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      src: iPhonePortImage,
      orientation: 'portrait',
      alt: 'alt here',
    },
  },
  {
    title: 'de Finibus Bonorum et Malorum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      src: iPhoneLandImage,
      orientation: 'landscape',
      alt: 'alt here',
    },
  },
  {
    title: 'de Finibus Bonorum et Malorum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      src: iPadPortImage,
      orientation: 'portrait',
      alt: 'alt here',
    },
  },
  {
    title: 'de Finibus Bonorum et Malorum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      src: iPadLandImage,
      orientation: 'landscape',
      alt: 'alt here',
    },
  },
];

storiesOf('iOS', module)
  .add('iPhone Portrait', () => (
    <PortfolioContainer {...contents[0]} />
  ))
  .add('iPhone Landscape', () => (
    <PortfolioContainer {...contents[1]} />
  ))
  .add('iPad Portrait', () => (
    <PortfolioContainer {...contents[2]} />
  ))
  .add('iPad Landscape', () => (
    <PortfolioContainer {...contents[3]} />
  ));
