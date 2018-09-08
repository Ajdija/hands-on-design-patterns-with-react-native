import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import taskReducer from '../reducers/taskReducer';
import taskFormReducer from '../reducers/taskFormReducer';

const persistConfig = {
    transforms: [immutableTransform()],
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    tasks: taskReducer,
    taskForm: taskFormReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;

export const TasksPropTypes = PropTypes.oneOfType([
    ImmutablePropTypes.listOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    })),
    PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    }))
]);
