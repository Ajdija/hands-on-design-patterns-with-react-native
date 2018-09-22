import * as React from 'react';
import { Button } from 'react-native';
import {
    NavigationParams, NavigationScreenProp, NavigationState
} from 'react-navigation';

type NavigateButtonProps = {
    to: 'string',
    data: any,
    text: 'string',
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
};

export const NavigateButton:React.SFC<NavigateButtonProps> = ({
    navigation, to, data, text
}) => (
    <Button
        onPress={() => navigation.navigate(to, data)}
        title={text}
    />
);

export default NavigateButton;
