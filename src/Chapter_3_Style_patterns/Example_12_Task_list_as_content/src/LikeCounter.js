import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { SimpleLineIcons } from '@expo/vector-icons';

class LikeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: props.likes
        };
    }
    like = () => this.setState({ likeCount: this.state.likeCount + 1 })
    unlike = () => this.setState({ likeCount: this.state.likeCount - 1 })
    kiloText = (nr, nrK = 0) => (nr.length > 3
        ? this.kiloText(nr.substring(0, nr.length - 3), nrK + 1)
        : nr + Array(nrK).fill('K').join(''))

    render = () => {
        const likes = this.state.likeCount.toString();
        return (
            <View style={styles.container}>
                <View style={styles.likeCount}>
                    <Text style={styles.text}>
                        {this.kiloText(likes)}
                    </Text>
                </View>
                <View style={styles.likeDislike}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonDislike]}
                        onPress={this.unlike}
                    >
                        <SimpleLineIcons
                            name="dislike"
                            size={32}
                            color="#4867AD"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonLike]}
                        onPress={this.like}
                    >
                        <SimpleLineIcons
                            name="like"
                            size={32}
                            color="#4867AD"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

LikeCounter.propTypes = {
    likes: PropTypes.number
};

LikeCounter.defaultProps = {
    likes: 0
};

export default LikeCounter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: '#E9EBEE',
        borderLeftWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    likeCount: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    likeDislike: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonLike: {
        marginLeft: 10
    },
    buttonDislike: {
        marginRight: 10,
        marginTop: 10
    },
    text: {
        fontSize: 30
    }
});
