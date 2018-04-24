import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
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
        this.state.fps = 0;

        // Comment this out if you use perf monitor.
        let FPScounter = 0;
        setInterval(() => FPScounter++, 16);
        setInterval(() => {
            this.setState({ fps: FPScounter });
            FPScounter = 0;
        }, 1000);
    }

    componentDidMount() {
        this.fadeInBoxes();
    }

    getFadeInAnimation = animatedVal =>
        Animated.timing(animatedVal, { toValue: 1, duration: 1000 });

    fadeInBoxes = () => {
        Boxes.forEach(box => this.state[box].setValue(0));
        const animations = Boxes.map(box =>
            this.getFadeInAnimation(this.state[box]));
        Animated.stagger(10, animations).start();
    };

    render = () => (
        <View style={{ marginTop: 60 }}>
            <View style={{ alignItems: 'center' }}>
                <Text>Shake device and open perf monitor.</Text>
                <Button title="Rerun" onPress={() => this.fadeInBoxes()} />
                <Text>FPS: {this.state.fps}</Text>
            </View>
            <View style={styles.container}>
                {Boxes.map(box =>
                    <Box key={box} opacity={this.state[box]} />)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    box: {
        width: 30,
        height: 30,
        margin: 3,
        backgroundColor: 'blue'
    }
});
