import { LOGIN, LOGOUT } from '../constants'

const INITIAL_STATE = {
  isLoggedIn: false,
  email: '',
  password: ''
}

export default function authReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: true,
        email: action.email,
        password: action.password,
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        email: '',
        password: ''
      })
    default:
      return state
  }
}
