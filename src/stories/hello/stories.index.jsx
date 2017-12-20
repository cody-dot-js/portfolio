import React from 'react';

import { storiesOf } from '@storybook/react';

import MarkdownViewer from '../../markdownViewer/MarkdownViewer';
import README from './README.md';

storiesOf('Hello', module)
  .add('Welcome!', () => <MarkdownViewer content={README} />);
