import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LanguageConsumer } from '../../../common/LanguageContext';
import { TaskType } from '../actions/TasksActionTypes';

type Props = {
    tasks: ReadonlyArray<TaskType>
    isLoading: boolean,
    hasError?: boolean,
    errorMsg?: string
    NavButton: React.SFC<{
        to: string,
        data: any,
        text: string
    }>
};

const TaskList:React.SFC<Props> = ({
    tasks,
    isLoading,
    NavButton,
    hasError = false,
    errorMsg = 'Error has occurred while fetching tasks.'
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
