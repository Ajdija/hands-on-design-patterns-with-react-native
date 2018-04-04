import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class LikeCounter extends React.Component {
    state = {
        likeCount: 0
    }
    like = () => this.setState({likeCount: this.state.likeCount + 1})
    unlike = () => this.setState({likeCount: this.state.likeCount - 1})

    render = () => (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={this.unlike}
            >
                <Text>Unlike</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{this.state.likeCount}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.like}
            >
                <Text>Like</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LikeCounter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20
    },
    text: {
        fontSize: 45
    }
});
