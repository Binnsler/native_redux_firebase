import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Button from './components/button';

class App extends React.Component {
  render(){
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>We made it to level {this.props.level}!</Text>
        <Button text={'Level Up'} onPress={this.props.levelUp}></Button>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps(state){
  return {level: state.test.level}
};

function mapDispatchToProps(dispatch){
  return {
    levelUp: function(){dispatch({type: 'LEVEL_UP'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
