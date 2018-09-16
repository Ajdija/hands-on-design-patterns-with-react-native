import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskActions from '../actions/TaskActions';
import { TaskPropType } from '../state/types';

const mapDispatchToProps = dispatch => ({
    fetchTask: TaskActions.fetchTaskStart(dispatch)
});

const fetchTask = (WrappedComponent) => {
    const fetchTaskWrapper = (props) => {
        if (props.task) {
            return <WrappedComponent {...props} />;
        }

        class TaskFetchWrapper extends React.Component {
            componentDidMount = () => this.props.fetchTask(props.taskId);
            render = () => <WrappedComponent {...this.props} />;
        }

        TaskFetchWrapper.propTypes = {
            fetchTask: PropTypes.func.isRequired
        };
        const Container = connect(null, mapDispatchToProps)(TaskFetchWrapper);

        return <Container {...props} />;
    };

    fetchTaskWrapper.defaultProps = {
        task: null
    };

    fetchTaskWrapper.propTypes = {
        task: TaskPropType
    };

    return fetchTaskWrapper;
};


export default fetchTask;
