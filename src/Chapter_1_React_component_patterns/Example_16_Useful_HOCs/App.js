import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Button, ActivityIndicator, Modal} from 'react-native';

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

const mapPropNames = (Component) => (props) => (
    <Component
        {...props}
        isVisible={props.isExpanded}
        showHideBox={props.expandOrCollapse}
    />
);

const logPropChanges = Component => props => {
    console.log('[Actual props]:', props);
    return <Component {...props} />;
};

const withSpinner = Component => props => (
    // Needs a HOC that provides prop shouldSpin (true/false)
    // Try setting it yourself
    props.shouldSpin
        ? <View style={styles.container}>
            <Text>Your fav spinner f.in. on data load.</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
        : <Component {...props} />
);

const withModalOpener = OriginalComponent => (
    class ModalExample extends React.Component {
        state = {
            modalVisible: true,
        };

        setModalVisible(visible) {
            this.setState({modalVisible: visible});
        }

        render() {
            return (
                // Replace with your favourite Modal box implementation
                <View style={styles.container}>
                    <OriginalComponent
                        {...this.props}
                        openModal={() => this.setModalVisible(true)}
                        closeModal={() => this.setModalVisible(false)}
                    />
                    <Modal
                        animationType="slide"
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <View style={styles.container}>
                            <Text>Example modal!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(false);
                                }}>
                                <Text style={{fontSize: 30}}>
                                    Hide Modal
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                </View>
            );
        }
    }
);

export default withModalOpener(makeExpandable(logPropChanges(mapPropNames(SomeSection))));

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
