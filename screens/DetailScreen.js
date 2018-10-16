import React from 'react';

import { ScrollView, Text, Image } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import { fetchDetailNews } from '../redux/actions/fetchDetailNewsAction'

class DetailScreen extends React.Component {
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
    const newsId = this.props.navigation.getParam('newsId')
    this.props.fetchDetailNews(newsId)
  }

  render() {
    return (
      this.props.newsDetail && (
      <ScrollView key={this.props.newsDetail.data.id} style={{ flex: 1, flexDirection: 'column'}}>
        <Image 
          style={{flex: 1, height: 350}}
          source={{uri: this.props.newsDetail.data.image_cover}} 
        />
        <Text style={{ fontSize: 40, margin: 10 }}>{this.props.newsDetail.data.title}</Text> 
        <Text style={{ margin: 10 }}>{this.props.newsDetail.data.body}</Text> 
      </ScrollView>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    newsDetail: state.newsDetail.news_detail,
    loading: state.newsDetail.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ fetchDetailNews }, dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
