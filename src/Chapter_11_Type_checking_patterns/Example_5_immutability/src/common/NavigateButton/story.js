import { storiesOf } from '@storybook/react-native';
import {
    withBackText,
    withDetailsText,
    withEmojisText
} from './examples';
import scrollViewDecorator from '../utils/scrollViewDecorator';

storiesOf('NavButton', module)
    .addDecorator(scrollViewDecorator)
    .add('with details text', withDetailsText)
    .add('with back text', withBackText)
    .add('with emojis text', withEmojisText);
