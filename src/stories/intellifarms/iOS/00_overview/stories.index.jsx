import React from 'react';
import { storiesOf } from '@storybook/react';

import MarkdownViewer from '../../../../markdownViewer/MarkdownViewer';
import README from './README.md';

storiesOf('IntelliFarms/iOS/00 - Overview', module)
  .add('Description', () => <MarkdownViewer content={README} />);
