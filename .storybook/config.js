import { configure } from '@storybook/react';

function loadStories() {
  require('../src/__stories__/usage.story.js');
}

configure(loadStories, module);