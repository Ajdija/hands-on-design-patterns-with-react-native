import StandaloneApp from './build/dist/src/Root';
import StoryBookApp from './build/dist/src/storybook';

// CRNA process ignores all env variables that didn't start with REACT_NATIVE_
export default process.env['REACT_NATIVE_IS_STORY_BOOK'] ? StoryBookApp : StandaloneApp;
