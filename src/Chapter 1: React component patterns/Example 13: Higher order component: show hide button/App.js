import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const SomeSection = ({
    isExpanded,
    expandOrCollapse,
    containerStyles,
    boxStyle
}) => (
    <View style={containerStyles || styles.container}>
        <Button
            onPress={expandOrCollapse}
            title={isExpanded ? "Hide" : "Show"}
            color="#841584"
        />
        {isExpanded && <View style={boxStyle || styles.box}/>}
    </View>
);

const makeExpandable = (ComponentToEnrich) => (
    class HelloBoxContainer extends React.Component {
        constructor() {
            super();
            this.state = {
                // default state on first render
                expanded: false
            };
            this.expandOrCollapse = this.expandOrCollapse.bind(this);
        }

        expandOrCollapse() {
            // toggle expanded: true becomes false, false becomes true
            this.setState({expanded: !this.state.expanded});
        }

        render = () => (
            <ComponentToEnrich
                isExpanded={this.state.expanded}
                expandOrCollapse={this.expandOrCollapse}
            />
        );
    }
);

export default makeExpandable(SomeSection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'powderblue',
    }
});
