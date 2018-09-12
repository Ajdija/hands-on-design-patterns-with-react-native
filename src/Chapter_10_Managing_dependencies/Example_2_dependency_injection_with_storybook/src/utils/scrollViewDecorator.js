import React from 'react';
import { ScrollView } from 'react-native';
import { styles as generalStyles } from '../layout/views/GeneralAppView';

const scrollViewDecorator = getStory => (
    <ScrollView style={generalStyles.content}>{getStory()}</ScrollView>
);

export default scrollViewDecorator;
