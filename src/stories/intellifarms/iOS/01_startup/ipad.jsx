import React from 'react';

import PortfolioContainer from '../../../../portfolioContainer/PortfolioContainer';

const data = {
  title: 'iPad Startup Screen',
  description: 'This screen is displayed when cold-start launching the application on an iPad.',
  image: {
    src: 'https://github.com/dev-cprice/if-ios-bt/raw/master/assets/00_startup/01_ipad_startup/01_ipad_startup.png',
    orientation: 'portrait',
    alt: 'iPhone Startup Screen',
  },
};

const IPadStartup = (props) => { // eslint-disable-line
  return (
    <PortfolioContainer {...props} {...data} />
  );
};

export default IPadStartup;
