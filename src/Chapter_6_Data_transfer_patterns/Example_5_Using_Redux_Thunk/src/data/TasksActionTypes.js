import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

const ActionTypes = {
    ADD_TASK: 'ADD_TASK',
    TASK_FETCH_START: 'TASK_FETCH_START',
    TASK_FETCH_COMPLETE: 'TASK_FETCH_COMPLETE',
    TASK_FETCH_ERROR: 'TASK_FETCH_ERROR'
};

export const TasksPropTypes =
    ImmutablePropTypes.mapContains({
        entities: ImmutablePropTypes.listOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })).isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasError: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired
    });

export default ActionTypes;
