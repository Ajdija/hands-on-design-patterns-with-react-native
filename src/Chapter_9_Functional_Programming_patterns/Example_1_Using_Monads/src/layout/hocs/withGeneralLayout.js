import React from 'react';
import GeneralAppView from '../views/GeneralAppView';
import withOwnLayout from './withOwnLayout';

const withGeneralLayout = ScreenComponent => withOwnLayout(props => (
    <GeneralAppView content={<ScreenComponent {...props} />} />
));

export default withGeneralLayout;
