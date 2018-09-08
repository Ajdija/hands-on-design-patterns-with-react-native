import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskActions from '../actions/TaskActions';

const mapDispatchToProps = dispatch => ({
    fetchTasks: TaskActions.fetchStart(dispatch)
});

const fetchTasks = (WrappedComponent) => {
    class TasksFetchWrapper extends React.Component {
        componentDidMount = () => this.props.fetchTasks();
        render = () => <WrappedComponent {...this.props} />;
    }
    TasksFetchWrapper.propTypes = {
        fetchTasks: PropTypes.func.isRequired
    };
    return connect(null, mapDispatchToProps)(TasksFetchWrapper);
};

export default fetchTasks;
