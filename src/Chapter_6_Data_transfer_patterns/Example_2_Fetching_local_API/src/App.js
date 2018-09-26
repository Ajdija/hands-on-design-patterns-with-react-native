import React from 'react';
import { Provider, connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import store from './data/AppStore';
import AppView from './views/AppView';

class TasksFetchWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hasError: false,
            errorMsg: '',
            tasks: props.tasks
        };
    }

    componentDidMount() {
        // To observer error change to something like:
        // http://localhost2:3000/tasks
        return ((Platform.OS === 'ios')
            ? fetch('http://localhost:3000/tasks')
            : fetch('http://10.0.2.2:3000/tasks'))
            .then(response => response.json())
            .then((responseJSON) => {
                this.setState({
                    isLoading: false,
                    tasks: Immutable.List(responseJSON)
                });
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    hasError: true,
                    errorMsg: error.message
                });
            });
    }

    render = () => (
        <AppView
            tasks={this.state.tasks}
            isLoading={this.state.isLoading}
            hasError={this.state.hasError}
            errorMsg={this.state.errorMsg}
        />
    );
}

TasksFetchWrapper.propTypes = {
    tasks: ImmutablePropTypes.listOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    })).isRequired
};

const mapStateToProps = state => ({ tasks: state.tasks });
const AppContainer = connect(mapStateToProps)(TasksFetchWrapper);
const TasksApp = () => (
    <Provider store={store}><AppContainer /></Provider>
);

export default TasksApp;
