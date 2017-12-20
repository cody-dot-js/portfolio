import React from 'react';

import { storiesOf } from '@storybook/react';

import IPhoneStartup from './iphone';
import IPadStartup from './ipad';

storiesOf('IntelliFarms/iOS/01 - Startup', module)
  .add('iPhone', () => <IPhoneStartup />)
  .add('iPad', () => <IPadStartup />);
