import { combineReducers } from 'redux'

import news from './news'
import newsDetail from './news_detail'

export default combineReducers({
  news,
  newsDetail
})
