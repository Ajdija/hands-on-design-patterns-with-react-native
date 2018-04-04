import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppLayout = ({header, mainContent, footer}) => (
    <View style={styles.container}>
        <View style={styles.layoutHeader}>{header}</View>
        <View style={styles.layoutContent}>{mainContent}</View>
        <View style={styles.layoutFooter}>{footer}</View>
    </View>
);

const WelcomeHeader = () => <View><Text>Header</Text></View>;
const WelcomeContent = () => <View><Text>Content</Text></View>;
const WelcomeFooter = () => <View><Text>Footer</Text></View>;

const WelcomeScreen = () => (
    <AppLayout
        header={<WelcomeHeader />}
        mainContent={<WelcomeContent />}
        footer={<WelcomeFooter />}
    />
);

export default class App extends React.Component {
    render = () => <WelcomeScreen />;
}

// Don't worry if you don't know Flexbox in CSS, we cover it later
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    layoutHeader: {
        width: '100%',
        height: 100,
        backgroundColor: 'powderblue'
    },
    layoutContent: {
        flex: 1,
        width: '100%',
        backgroundColor: 'skyblue'
    },
    layoutFooter: {
        width: '100%',
        height: 100,
        backgroundColor: 'steelblue'
    }
});
