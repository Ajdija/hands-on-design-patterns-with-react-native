import React from 'react';
import { connect } from 'react-redux';
import GeneralAppView from '../views/GeneralAppView';
import languageSelector from '../../features/language/state/selectors';


const withGeneralLayout = ScreenComponent => connect(state => ({
    language: languageSelector(state)
}))(({ language, ...otherProps }) => (
    <GeneralAppView language={language} content={<ScreenComponent {...otherProps} />} />
));

export default withGeneralLayout;
