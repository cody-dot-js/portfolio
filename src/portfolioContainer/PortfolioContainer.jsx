import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import Heading from 'terra-heading';
import Spacer from 'terra-spacer';

import PortfolioCard from '../portfolioCard/PortfolioCard';
import styles from './PortfolioContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    orientation: PropTypes.oneOf(['portrait', 'landscape']).isRequired,
  }).isRequired,
};

const defaultProps = {

};

const largePadding = {
  paddingLeft: 'large+1',
  paddingTop: 'large+1',
  paddingRight: 'large+1',
  paddingBottom: 'large+1',
};

const darkTextDisabled = 'rgba(0, 0, 0, 0.38)';

const PortfolioContainer = ({
  title,
  description,
  image,
}) => {
  const header = (
    <Spacer {...largePadding}>
      <Heading level={1} color={darkTextDisabled}>
        {title}
      </Heading>
    </Spacer>
  );

  return (
    <ContentContainer className={cx('portfolio-container')} header={header}>
      <Spacer marginBottom="large+4">
        <Arrange
          fitStart={<div />}
          fill={
            <div className={cx('portfolio-card')}>
              <PortfolioCard title={title} description={description} image={image} />
            </div>
          }
          fitEnd={<div />}
          align="center"
        />
      </Spacer>
    </ContentContainer>
  );
};

PortfolioContainer.propTypes = propTypes;
PortfolioContainer.defaultProps = defaultProps;

export default PortfolioContainer;
