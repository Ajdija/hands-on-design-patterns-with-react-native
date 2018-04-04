import React from 'react';
import {Text} from 'react-native';

const HelloText = ({children, ...otherProps}) => (
    <Text {...otherProps}>{children}</Text>
);

export default HelloText;
