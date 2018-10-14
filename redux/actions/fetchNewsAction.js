import axios from 'axios'
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, FETCHING_NEWS, API_FETCH_NEWS   } from '../constants'

export function fetchNews() {
  return (dispatch) => {
    dispatch(getNews()) 
    axios.get(API_FETCH_NEWS)
      .then((res) => {
        return (dispatch(getNewsSuccess(res.data)))
      })
      .catch((err) => dispatch(getNewsFailure(err)))
  }
}

function getNews() {
  return {
    type: FETCHING_NEWS 
  }
}

function getNewsSuccess(data) {
  return {
    type: FETCH_NEWS_SUCCESS,
    data
  }
}

function getNewsFailure() {
  return {
    type: FETCH_NEWS_FAILURE 
  }
}
