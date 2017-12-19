import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Welcome } from '@storybook/react/demo';
import Spacer from 'terra-spacer';
import PortfolioCard from '../portfolioCard/PortfolioCard';
import iPhoneImage from '../assets/00_iphone_startup.png';
import iPadImage from '../assets/01_ipad_startup.png';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
const spacing = {
  paddingTop: 'large+2',
  paddingBottom: 'large+2',
  paddingLeft: 'large+2',
  paddingRight: 'large+2',
};

storiesOf('iOS', module)
  .add('iPhone', () => (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <Spacer style={{ maxWidth: '720px', margin: 'auto' }} {...spacing} >
        <PortfolioCard
          title="de Finibus Bonorum et Malorum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={{ src: iPhoneImage, alt: 'alt here' }}
        />
      </Spacer>
    </div>
  ))
  .add('iPad', () => (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <Spacer style={{ maxWidth: '720px', margin: 'auto' }} {...spacing} >
        <PortfolioCard
          title="de Finibus Bonorum et Malorum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={{ src: iPadImage, alt: 'alt here' }}
        />
      </Spacer>
    </div>
  ));
