import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'emily'};


  }

  onPressLearnMore(){
    console.log("hello")
    this.setState({name:'hello'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.redfont}>Emily's first mobile app</Text>
        <Button
        onPress={this.onPressLearnMore.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>2018 by {this.state.name}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redfont: {
    color: '#ff0000',
  }
});
