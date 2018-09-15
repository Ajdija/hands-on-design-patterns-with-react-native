import { default as StandaloneApp } from './index';
import { default as StoryBookApp } from './storybook';

// CRNA process ignores all env variables that didn't start with REACT_NATIVE_
export default process.env['REACT_NATIVE_IS_STORY_BOOK'] ? StoryBookApp : StandaloneApp;
