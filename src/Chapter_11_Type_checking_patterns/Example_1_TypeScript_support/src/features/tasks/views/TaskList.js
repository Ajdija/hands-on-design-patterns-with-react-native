import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { TaskPropType } from '../state/types';
import { LanguageConsumer } from '../../../common/LanguageContext';

const TaskList = ({
    tasks, isLoading, hasError, errorMsg, NavButton
}) => (
    <View style={styles.taskList}>
        <LanguageConsumer>
            {language => (
                <Text style={styles.selectedLanguage}>
                    Selected language: {language}
                </Text>
            )}
        </LanguageConsumer>
        {hasError &&
            <View>
                <Text>{errorMsg}</Text>
            </View>}
        {hasError && isLoading &&
            <View>
                <Text>Fetching again...</Text>
            </View>}
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {tasks && tasks.map((task, index) => (
            <View
                style={[
                    styles.task,
                    index === 0 ? null : styles.borderTop
                ]}
                key={task.name}
            >
                <View style={styles.taskText}>
                    <Text style={styles.taskName}>
                        {task.name}
                    </Text>
                    <Text>{task.description}</Text>
                </View>
                <View style={styles.taskActions}>
                    <NavButton
                        data={{ taskId: task.id }}
                        to="Task"
                        text="Details"
                    />
                </View>
            </View>

        ))}
    </View>
);

TaskList.defaultProps = {
    errorMsg: 'Error has occurred while fetching tasks.'
};

TaskList.propTypes = {
    tasks: ImmutablePropTypes.listOf(TaskPropType).isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    NavButton: PropTypes.element.isRequired
};

const styles = StyleSheet.create({
    taskList: {
        flex: 1
    },
    selectedLanguage: {
        fontSize: 24
    },
    task: {
        flex: 1,
        flexDirection: 'row'
    },
    taskActions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskText: {
        width: '70%'
    },
    taskName: { fontSize: 25 },
    taskDescription: { fontSize: 20 },
    taskLikes: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    borderTop: {
        borderTopColor: '#E9EBEE',
        borderTopWidth: 2,
        marginTop: 10,
        paddingTop: 10
    }
});

export default TaskList;
