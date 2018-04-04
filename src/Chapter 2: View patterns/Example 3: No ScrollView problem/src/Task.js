import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const Task = ({
    name, description, expandOrCollapse, isExpanded
}) => (
    <View>
        <Text
            // just to make it bigger in the example
            style={{fontSize: 45}}
            onPress={() => expandOrCollapse()}
        >
            {name}
        </Text>
        {isExpanded && <Text>{description}</Text>}
    </View>
);

Task.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    expandOrCollapse: PropTypes.func.isRequired,
}

export default Task;
