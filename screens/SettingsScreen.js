import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import Login from '../containers/Login'
import Profile from '../containers/Profile'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
  };

  render() {
    if(this.props.isLoggedIn) {
      return <Profile />;
    } else {
      return <Login />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    email: state.auth.email
  }
}

export default connect(mapStateToProps)(SettingsScreen)
