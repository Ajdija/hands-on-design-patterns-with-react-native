import React from 'react';
import { Provider, connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import store from './data/AppStore';
import AppView from './views/AppView';
import TaskActions from './data/TaskActions';

class TasksFetchWrapper extends React.Component {
    componentDidMount() {
        TaskActions.fetchStart();
        return ((Platform.OS === 'ios')
            ? fetch('http://localhost:3000/tasks')
            : fetch('http://10.0.2.2:3000/tasks'))
            .then(response => response.json())
            .then((responseJSON) => {
                TaskActions.fetchComplete(Immutable.List(responseJSON));
            })
            .catch(error => TaskActions.fetchError(error));
    }

    render = () => <AppView tasks={this.props.tasks} />;
}

TasksFetchWrapper.propTypes = {
    tasks: ImmutablePropTypes.mapContains({
        entities: ImmutablePropTypes.listOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })).isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasError: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = state => ({ tasks: state.tasks });
const AppContainer = connect(mapStateToProps)(TasksFetchWrapper);
const TasksApp = () => (
    <Provider store={store}><AppContainer /></Provider>
);

export default TasksApp;
