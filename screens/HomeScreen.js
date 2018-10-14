import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchNews } from '../redux/actions/fetchNewsAction'

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

  componentDidMount(){
    this.props.fetchNews() 
  }

  render() {
    const { news, isFetching } = this.props.news
    console.log(news.data)

    if(isFetching){
      return (
        <View>
          <Text>Loading...</Text> 
        </View> 
      )
    } else {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Text>Render Headline News</Text>
            </View>
            { news.data ? news.data.map((res) => (
              <View style={styles.getStartedContainer} key={res.id}>
                <Image
                  source={{uri: res.image_cover }}
                />
                <Text>{res.title}</Text>
                <Text>{res.body}</Text>
              </View>
            )) : (<Text>Foo</Text>)}
          </ScrollView>
        </View>
      ) 
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    marginHorizontal: 10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});


const mapStateToProps = state => {
  return {
    news: state.news       
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ fetchNews }, dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
