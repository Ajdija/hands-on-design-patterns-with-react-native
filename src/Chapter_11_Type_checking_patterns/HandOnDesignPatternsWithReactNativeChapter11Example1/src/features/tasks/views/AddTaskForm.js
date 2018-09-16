import * as React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const INITIAL_ADD_TASK_FORM_STATE = {
    name: '',
    description: ''
};

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
    }

    state = INITIAL_ADD_TASK_FORM_STATE;

    handleSubmit = () => {
        this.props.addTask({
            name: this.state.name,
            description: this.state.description
        });
        this.setState(INITIAL_ADD_TASK_FORM_STATE);
    };

    render = () => (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                onChangeText={d => this.setState({ description: d })}
                value={this.state.description}
            />
            <Button
                title="Add task"
                onPress={() => this.handleSubmit()}
            />
        </View>
    );
}

AddTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
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

