import React from 'react';
import { Provider } from 'react-redux';
import store from '../../flux/AppStore';

const withOwnLayout = LayoutComponent => props => (
    <Provider store={store}>
        <LayoutComponent {...props} />
    </Provider>
);

export default withOwnLayout;
