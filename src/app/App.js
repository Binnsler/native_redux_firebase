import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './actions';

import Button from './components/button';

class App extends React.Component {

  componentWillMount(){
    this.props.fetchLevel();
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>We made it to level {this.props.level}!</Text>
        <Button text={'Level Up'} onPress={() => this.props.levelUp(this.props.level)}></Button>
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

export default connect(mapStateToProps, actions)(App);
