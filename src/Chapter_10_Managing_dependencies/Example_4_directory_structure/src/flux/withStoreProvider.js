import React from 'react';
import { Provider } from 'react-redux';
import store from './AppStore';

const withStoreProvider = WrappedComponent => props => (
    <Provider store={store}>
        <WrappedComponent {...props} />
    </Provider>
);

export default withStoreProvider;
