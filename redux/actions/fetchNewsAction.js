import axios from 'axios'
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, FETCHING_NEWS } from '../constansts'

export default fetchNews(){
  return (dispatch) => {
    dispatch(getNews()) 

    return (axios.get(url))
      .then(res => res.json())
      .then(json => {
        return (dispatch(getNewsSuccess(json))) 
      })
      .catch(err => dispatch(getNewsFailure(err)))
  }
}

const getNews = () => {
  return {
    type: FETCHING_NEWS 
  }
}

const getNewsSuccess = data => {
  return {
    type: FETCH_NEWS_SUCCESS,
    data
  }
}

const getNewsFailure = () => {
  return {
    type: FETCH_NEWS_FAILURE 
  }
}
