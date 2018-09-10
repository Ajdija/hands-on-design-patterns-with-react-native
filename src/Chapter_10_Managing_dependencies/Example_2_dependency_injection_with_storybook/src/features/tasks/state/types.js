import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const TaskPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
});

export const TasksPropTypes =
    ImmutablePropTypes.mapContains({
        entities: ImmutablePropTypes.listOf(TaskPropType).isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasError: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired
    });

export default TasksPropTypes;
