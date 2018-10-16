import { combineReducers } from 'redux'

import news from './news'
import newsDetail from './news_detail'
import auth from './auth'

export default combineReducers({
  news,
  newsDetail,
  auth
})
