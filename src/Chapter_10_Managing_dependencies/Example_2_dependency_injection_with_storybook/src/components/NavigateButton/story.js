import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styles as generalStyles }
    from '../../layout/views/GeneralAppView';
import {
    withBackText,
    withDetailsText,
    withEmojisText
} from './examples';

const scrollViewDecorator = getStory => (
    <ScrollView style={generalStyles.content}>{getStory()}</ScrollView>
);

storiesOf('NavButton', module)
    .addDecorator(scrollViewDecorator)
    .add('with details text', withDetailsText)
    .add('with back text', withBackText)
    .add('with emojis text', withEmojisText);
