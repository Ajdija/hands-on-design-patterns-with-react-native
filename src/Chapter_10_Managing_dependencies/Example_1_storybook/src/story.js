/* eslint-disable import/no-unresolved,import/extensions,jsx-a11y/accessible-emoji */
import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from '../storybook/stories/Button';
import CenterView from '../storybook/stories/CenterView';

storiesOf('Default Button example', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('with text', () => (
        <Button onPress={action('clicked-text')}>
            <Text>Hello Button</Text>
        </Button>
    ))
    .add('with some emoji', () => (
        <Button onPress={action('clicked-emoji')}>
            <Text>😀 😎 👍 💯</Text>
        </Button>
    ));
