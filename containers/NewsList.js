import React, { Component } from 'react';
import { styles } from './StyleNews'
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Placeholder from 'rn-placeholder';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchNews } from '../redux/actions/fetchNewsAction'

const MAX_LENGTH = 120;

class NewsList extends Component {

  componentDidMount(){
    this.props.fetchNews()
  }

  render() {
    const { news, isFetching } = this.props.news
    console.log(news.data)

    if(isFetching){
      return (
        <View>
          <Placeholder.ImageContent
            size={60}
            animate="fade"
            lineNumber={5}
            lineSpacing={5}
            lastLineWidth="30%"
            color="grey"
          >
          </Placeholder.ImageContent>
          <Placeholder.ImageContent
            size={60}
            animate="fade"
            lineNumber={5}
            lineSpacing={5}
            lastLineWidth="30%"
            color="grey"
          >
          </Placeholder.ImageContent>
          <Placeholder.ImageContent
            size={60}
            animate="fade"
            lineNumber={5}
            lineSpacing={5}
            lastLineWidth="30%"
            color="grey"
          >
          </Placeholder.ImageContent>
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
              <View key={res.id} style={{  width: 300, height: 350, alignItems: 'center', justifyContent: 'center', margin: 28, borderColor: 'black',
                borderWidth: 1,  borderRadius: 10  }}>
                <Image
                  source={{ uri: res.image_cover }}
                  style={{ flex: 1, height: 2, width: 300, borderRadius: 10}}
                />
                <TouchableOpacity
                  key={res.id}
                  onPress={() => this.props.navigation.navigate('Detail', {
                    newsId: res.id,
                    slug: res.title
                  })
                  }
                >
                  <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 10 }}>{res.title}</Text>
                  <Text style={{ margin: 10 }}>{`${res.body.substring(0, MAX_LENGTH)} ...`}</Text>
                </TouchableOpacity>
              </View>
            )) : (<Text>Internal Server Error</Text>)}
          </ScrollView>
        </View>
      )
    }
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
