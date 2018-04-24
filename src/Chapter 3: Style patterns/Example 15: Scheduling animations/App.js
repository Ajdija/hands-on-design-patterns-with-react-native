import React from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native';

const Boxes = Array(200).fill(1).map((_, i) => i);

// ES6 reducer function: Maps box to AnimatedValue
// and assigns under correct id in the state.
const toAnimReducer = (acc, box) => (
    { ...acc, [box]: new Animated.Value(0) }
);

// Creates AnimatedValues for all boxes
const animationValues = Boxes.reduce(toAnimReducer, {});

// Simple stateless component with styles to make it a blue box
const Box = ({ opacity }) => (
    <Animated.View style={[styles.box, { opacity }]} />
);

export default class App extends React.Component {
    constructor() {
        super();
        this.state = animationValues;
    }

    componentDidMount() {
        const animations = Boxes.map(box =>
            this.getFadeInAnimation(this.state[box]));
        Animated.stagger(10, animations).start();
    }

    getFadeInAnimation = animatedVal =>
        Animated.timing(animatedVal, { toValue: 1, duration: 5000 });

    render = () => (
        <View style={styles.container}>
            {Boxes.map(box =>
                <Box key={box} opacity={this.state[box]} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 60,
        justifyContent: 'center'
    },
    box: {
        width: 30,
        height: 30,
        margin: 3,
        backgroundColor: 'blue'
    }
});
