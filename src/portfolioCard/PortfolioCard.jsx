import React from 'react';
import PropTypes from 'prop-types';
import Card from 'terra-card';
import ContentContainer from 'terra-content-container';
import Heading from 'terra-heading';
import Image from 'terra-image';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import classNames from 'classnames/bind';

import styles from './PortfolioCard.scss';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

const defaultProps = {

};

const contentSpacing = {
  paddingLeft: 'large+1',
  paddingTop: 'large+1',
  paddingRight: 'large+1',
  paddingBottom: 'large+1',
};

const darkTextPrimary = 'rgba(0, 0, 0, 0.87)';
const darkTextSecondary = 'rgba(0, 0, 0, 0.54)';

const PortfolioCard = ({
  title,
  image,
  description,
}) => {
  const hero = (
    <div className={cx('portfolio-card-image-container')}>
      <Image
        className={cx('portfolio-card-image')}
        src={image.src}
        alt={image.alt}
      />
    </div>
  );

  const header = (
    <Heading level={1} color={darkTextPrimary}>
      {title}
    </Heading>
  );

  const content = (
    <ContentContainer header={header}>
      {
        <Text color={darkTextSecondary}>
          {description}
        </Text>
      }
    </ContentContainer>
  );

  return (
    <Card>
      {hero}
      <Spacer {...contentSpacing}>
        {content}
      </Spacer>
    </Card>
  );
};

PortfolioCard.propTypes = propTypes;
PortfolioCard.defaultProps = defaultProps;

export default PortfolioCard;
