import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated,
    TouchableHighlight,
    ScrollView
} from 'react-native';

const basicEasings = [
    'Linear', 'Sin', 'Bounce', 'Cubic', 'Quad', 'Ease'
];

const Button = ({ onPress, easingName }) => (
    <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(easingName)}
    >
        <Text
            style={{ color: 'white', fontSize: 18 }}
        >{easingName}</Text>
    </TouchableHighlight>
);

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    easingName: PropTypes.string.isRequired
};

export default class App extends React.Component {
    constructor() {
        super();
        this.easeValue = new Animated.Value(20);
    }

    animate(easing) {
        this.easeValue.setValue(20);
        Animated.timing(
            this.easeValue,
            {
                toValue: 300,
                duration: 2000,
                easing
            }
        ).start();
    }

    onPress = easingName => this.animate(Easing[easingName.toLowerCase()]);

    render() {
        const marginLeft = this.easeValue;
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, { marginLeft }]} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textGuide}>
                        <View><Text>Start value</Text></View>
                        <View><Text>Tap on a button</Text></View>
                        <View><Text>End value</Text></View>
                    </View>
                    {basicEasings.map(easing => (
                        <Button
                            key={easing}
                            easingName={easing}
                            onPress={this.onPress}
                        />
                    ))}
                    <Button
                        easingName="Elastic"
                        onPress={() => this.animate(Easing.in(Easing.elastic(2)))}
                    />
                    <Button
                        easingName="Back"
                        onPress={() => this.animate(Easing.in(Easing.back(2)))}
                    />
                    <Button
                        easingName="In"
                        onPress={() => this.animate(Easing.in(Easing.quad))}
                    />
                    <Button
                        easingName="Out"
                        onPress={() => this.animate(Easing.out(Easing.quad))}
                    />
                    <Button
                        easingName="InOut"
                        onPress={() => this.animate(Easing.inOut(Easing.quad))}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    scrollView: {
        marginTop: 5,
        borderTopColor: '#E9EBEE',
        borderTopWidth: 2
    },
    textGuide: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        textAlign: 'center',
        paddingTop: 10
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    }
});
