import * as React from 'react';
import { Button } from 'react-native';
import {
    NavigationInjectedProps,
    NavigationParams,
} from 'react-navigation';

type NavigateButtonProps = {
    to: 'string',
    data: any,
    text: 'string'
} & NavigationInjectedProps<NavigationParams>;

export const NavigateButton:React.SFC<NavigateButtonProps> = ({
    navigation, to, data, text
}) => (
    <Button
        onPress={() => navigation.navigate(to, data)}
        title={text}
    />
);

export default NavigateButton;
