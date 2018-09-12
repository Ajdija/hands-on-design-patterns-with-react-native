import React, { Fragment } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { LANG_ENGLISH, LANG_POLISH } from './constants';

export const styles = StyleSheet.create({
    languageText: { fontSize: 18, color: '#ddd' },
    selectedText: { color: '#000' }
});

export const LanguageSwitcherView = props => (
    <Fragment>
        <TouchableHighlight onPress={() => props.onLanguageChange(LANG_ENGLISH)}>
            <Text
                style={[
                    styles.languageText,
                    props.currentSelection === LANG_ENGLISH && styles.selectedText
                ]}
            >English
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.onLanguageChange(LANG_POLISH)}>
            <Text
                style={[
                    styles.languageText,
                    props.currentSelection === LANG_POLISH && styles.selectedText
                ]}
            >Polish
            </Text>
        </TouchableHighlight>
    </Fragment>
);

LanguageSwitcherView.propTypes = {
    onLanguageChange: PropTypes.func.isRequired,
    currentSelection: PropTypes.string.isRequired
};

export default LanguageSwitcherView;
