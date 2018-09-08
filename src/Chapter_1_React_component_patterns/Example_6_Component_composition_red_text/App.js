import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WarningText = ({style, ...otherProps}) => (
    <Text style={[style, {color: 'orange'}]} {...otherProps} />
);

export default class App extends React.Component {
    render = () => (
        <View style={styles.container}>
            <Text style={styles.text}>Normal text</Text>
            <WarningText style={styles.text}>Warning</WarningText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        padding: '10%',
        justifyContent: 'flex-start',
        width: '100%'
    },
    text: {
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 40,
    }
});
