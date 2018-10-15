import { FETCH_DETAIL_NEWS_SUCCESS, FETCH_DETAIL_NEWS_FAILURE, FETCHING_DETAIL_NEWS } from '../constants'

const INITIAL_STATE = {
  news_detail: null,
  isFetching: true,
  error: false
}

export default function NewsDetailReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCHING_DETAIL_NEWS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_DETAIL_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news_detail: action.data
      }
    case FETCH_DETAIL_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default: 
      return state
  }
} 
