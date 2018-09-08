import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class LikeCounter extends React.Component {
    state = {
        likeCount: 0
    }
    like = () => this.setState({likeCount: this.state.likeCount + 1})
    unlike = () => this.setState({likeCount: this.state.likeCount - 1})

    render = () => (
        <View style={styles.container}>
            <Button
                onPress={this.unlike}
                title="Unlike"
            />
            <Text style={styles.text}>{this.state.likeCount}</Text>
            <Button
                onPress={this.like}
                title="Like"
            />
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
    text: {
        fontSize: 45
    }
});
