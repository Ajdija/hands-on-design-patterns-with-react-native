import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: ['123', '456']
    }
  }

  render = () => (
      <View style={styles.container}>
        {
          this.state.tasks
          .map((task, index) => (
              <Text key={index} style={styles.text}>{task}</Text>
          ))
        }
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
