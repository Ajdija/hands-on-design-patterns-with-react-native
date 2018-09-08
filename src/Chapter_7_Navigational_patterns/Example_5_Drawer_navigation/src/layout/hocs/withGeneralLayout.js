import React from 'react';
import { Provider } from 'react-redux';
import GeneralAppView from '../views/GeneralAppView';
import store from '../../flux/AppStore';

const withGeneralLayout = ScreenComponent => () => (
    <Provider store={store}>
        <GeneralAppView content={<ScreenComponent />} />
    </Provider>
);

export default withGeneralLayout;
