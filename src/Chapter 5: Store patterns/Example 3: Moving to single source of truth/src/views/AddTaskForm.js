import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import TaskActions from '../data/TaskActions';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        if (this.props.taskForm.name) {
            TaskActions.addTask({
                name: this.props.taskForm.name,
                description: this.props.taskForm.description
            });
            this.nameInput.clear();
            this.descriptionInput.clear();
        }
    };

    render = () => (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                ref={(input) => { this.nameInput = input; }}
                onChangeText={
                    name => TaskActions.taskFormChange({
                        name,
                        description: this.props.taskForm.description
                    })
                }
                value={this.props.taskForm.name}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                ref={(input) => { this.descriptionInput = input; }}
                onChangeText={
                    desc => TaskActions.taskFormChange({
                        name: this.props.taskForm.name,
                        description: desc
                    })
                }
                value={this.props.taskForm.description}
            />
            <Button
                title="Add task"
                onPress={() => this.handleSubmit()}
            />
        </View>
    );
}

AddTaskForm.propTypes = {
    taskForm: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#E9EBEE',
        borderBottomWidth: 2,
        marginBottom: 10
    },
    input: {
        height: 50
    }
});

export default AddTaskForm;

