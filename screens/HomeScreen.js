import React from 'react';
import NewsList from '../containers/NewsList'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'MakNews',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    return (
      <NewsList navigation={this.props.navigation} />   // lempar navigation ke chil
    )
  }
}

export default HomeScreen
