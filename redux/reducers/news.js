import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, FETCHING_NEWS } from '../constants'

const INITIAL_STATE = {
  news: [],
  isFetching: false,
  error: false
}

export default function NewsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCHING_NEWS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.data
      }
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default: 
      return state
  }
} 
