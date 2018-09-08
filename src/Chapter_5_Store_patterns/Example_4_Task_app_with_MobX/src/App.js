import React from 'react';
import { Provider as MobXProvider } from 'mobx-react/native';
import TaskStore from './data/TaskStore';
import AppView from './views/AppView';

const App = () => (
    <MobXProvider store={TaskStore}>
        <AppView />
    </MobXProvider>
);

export default App;
