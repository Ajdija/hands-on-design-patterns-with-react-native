import * as React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import LANGUAGES from './constants';
import { onLanguageChangeActionType } from './actions/LanguageChangeActions';

export const styles = StyleSheet.create({
    languageText: { fontSize: 18, color: '#ddd' },
    selectedText: { color: '#000' }
});

type Props = {
    onLanguageChange: (lang:LANGUAGES) => onLanguageChangeActionType,
    currentSelection: LANGUAGES
}

const LanguageSwitcherView = (props:Props) => (
    <React.Fragment>
        <TouchableHighlight onPress={() => props.onLanguageChange(LANGUAGES.ENGLISH)}>
            <Text
                style={[
                    styles.languageText,
                    props.currentSelection === LANGUAGES.ENGLISH && styles.selectedText
                ]}
            >English
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.onLanguageChange(LANGUAGES.POLISH)}>
            <Text
                style={[
                    styles.languageText,
                    props.currentSelection === LANGUAGES.POLISH && styles.selectedText
                ]}
            >Polish
            </Text>
        </TouchableHighlight>
    </React.Fragment>
);

export default LanguageSwitcherView;
