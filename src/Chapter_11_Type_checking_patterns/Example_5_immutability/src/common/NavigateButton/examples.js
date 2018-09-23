import * as React from 'react';
import { action } from '@storybook/addon-actions/src/index';
import NavButton from './view';

export const withDetailsText = () => (
    <NavButton
        navigation={{ navigate: () => action('navigate') }}
        text="Details"
        to=""
        data={{}}
    />
);

export const withBackText = () => (
    <NavButton
        navigation={{ navigate: () => action('navigate') }}
        text="Back"
        to=""
        data={{}}
    />
);

export const withEmojisText = () => (
    <NavButton
        navigation={{ navigate: () => action('navigate') }}
        text="😀 😎 👍 💯"
        to=""
        data={{}}
    />
);

export default withDetailsText;
