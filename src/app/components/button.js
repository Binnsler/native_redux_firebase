import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

class Button extends React.Component {
  render(){
    return (
      <TouchableHighlight style={styles.button} underlayColor={'gray'} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
};

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'grey',
    marginTop: 10
  },

  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});

export default Button;
