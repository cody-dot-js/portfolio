import React from 'react';

import PortfolioContainer from '../../../../portfolioContainer/PortfolioContainer';

const data = {
  title: 'iPhone Startup Screen',
  description: 'This screen is displayed when cold-start launching the application on an iPhone.',
  image: {
    src: 'https://github.com/dev-cprice/if-ios-bt/raw/master/assets/00_startup/00_iphone_startup/00_iphone_startup.png',
    orientation: 'portrait',
    alt: 'iPhone Startup Screen',
  },
};

const IPhoneStartup = (props) => { // eslint-disable-line
  return (
    <PortfolioContainer {...props} {...data} />
  );
};

export default IPhoneStartup;
