import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { TaskPropType } from '../state/types';

// TODO: Homework: Implement isLoading / hasError logic
// You can find similar implementation in views/TaskList.js
// TODO 2: Make it pretty, use the knowledge from Chapter 3 Style Patterns
const TaskDetails = ({ task }) => (
    <View>
        {!task && <ActivityIndicator size="large" color="#0000ff" />}
        {task && (
            <View>
                <View>
                    <Text>ID: {task.id}</Text>
                </View>
                <View>
                    <Text>NAME: {task.name}</Text>
                </View>
                <View>
                    <Text>DESCRIPTION: {task.description}</Text>
                </View>
                <View>
                    <Text>LIKES: {task.likes}</Text>
                </View>
            </View>
        )}
    </View>
);

TaskDetails.defaultProps = {
    task: null
};

TaskDetails.propTypes = {
    task: TaskPropType
};

export default TaskDetails;
