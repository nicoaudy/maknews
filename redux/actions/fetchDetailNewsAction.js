import axios from 'axios'
import { FETCH_DETAIL_NEWS_SUCCESS, FETCH_DETAIL_NEWS_FAILURE, FETCHING_DETAIL_NEWS, API_FETCH_DETAIL_NEWS   } from '../constants'

export function fetchDetailNews(params) {
  return (dispatch) => {
    dispatch(getDetailNews()) 
    axios.get(API_FETCH_DETAIL_NEWS + params)
      .then((res) => {
        return (dispatch(getDetailNewsSuccess(res.data)))
      })
      .catch((err) => dispatch(getDetailNewsFailure(err)))
  }
}

function getDetailNews() {
  return {
    type: FETCHING_DETAIL_NEWS 
  }
}

function getDetailNewsSuccess(data) {
  return {
    type: FETCH_DETAIL_NEWS_SUCCESS,
    data
  }
}

function getDetailNewsFailure() {
  return {
    type: FETCH_DETAIL_NEWS_FAILURE 
  }
}
