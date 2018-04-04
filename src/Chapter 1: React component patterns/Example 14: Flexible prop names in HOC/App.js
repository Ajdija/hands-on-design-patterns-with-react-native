import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const SomeSection = ({
    showHideBox,
    isVisible,
    containerStyles,
    boxStyle
}) => (
    <View style={containerStyles || styles.container}>
        <Button
            onPress={showHideBox}
            title={isVisible ? "Hide" : "Show"}
            color="#841584"
        />
        {isVisible && <View style={boxStyle || styles.box}/>}
    </View>
);

const makeExpandable = (ComponentToEnrich, propNames) => (
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

        render = () => {
            const props = {
                [propNames && propNames.isExpanded || 'isExpanded']: this.state.expanded,
                [propNames && propNames.expandOrCollapse || 'expandOrCollapse']: this.expandOrCollapse
            };
            return <ComponentToEnrich{...props} />
        };
    }
);

export default makeExpandable(SomeSection, {
    isExpanded: 'isVisible',
    expandOrCollapse: 'showHideBox'
});

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
