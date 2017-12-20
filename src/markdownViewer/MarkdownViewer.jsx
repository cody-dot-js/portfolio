import React from 'react';
import PropTypes from 'prop-types';
import Card from 'terra-card';
import ReactMarkdown from 'react-markdown';
import Spacer from 'terra-spacer';

const propTypes = {
  content: PropTypes.string,
};

const defaultProps = {
  content: '',
};

const spacing = {
  paddingTop: 'large',
  paddingBottom: 'large',
  paddingLeft: 'large',
  paddingRight: 'large',
};

const divStyle = {
  backgroundColor: '#e0e0e0',
};

const MarkdownViewer = ({
  content,
  ...props
}) => {
  const container = (
    <Spacer {...spacing}>
      <Card>
        <Spacer {...spacing}>
          <ReactMarkdown source={content} {...props} />
        </Spacer>
      </Card>
    </Spacer>
  );

  return (
    <div style={divStyle}>{container}</div>
  );
};

MarkdownViewer.propTypes = propTypes;
MarkdownViewer.defaultProps = defaultProps;

export default MarkdownViewer;
