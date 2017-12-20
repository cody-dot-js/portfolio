// import React from 'react';
// import Base from 'terra-base';
import { configure, addDecorator } from '@storybook/react';

/* eslint-disable react/jsx-filename-extension */
// addDecorator(story => <Base locale="en-US">{story()}</Base>)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/", true, /stories.index.jsx/));
}

configure(loadStories, module);
