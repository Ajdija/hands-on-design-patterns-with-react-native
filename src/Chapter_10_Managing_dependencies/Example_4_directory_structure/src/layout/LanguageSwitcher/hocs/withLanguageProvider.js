import React from 'react';
import { connect } from 'react-redux';
import languageSelector from '../state/selectors';
import { LanguageProvider } from '../../../common/LanguageContext';

const withLanguageProvider = WrappedComponent => connect(state => ({
    language: languageSelector(state)
}))(({ language, ...otherProps }) => (
    <LanguageProvider value={language}>
        <WrappedComponent {...otherProps} />
    </LanguageProvider>
));

export default withLanguageProvider;
