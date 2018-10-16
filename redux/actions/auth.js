import { LOGIN, LOGOUT } from '../constants'

export const login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password
  }
}

export const logout = (email, password) => {
  return {
    type: LOGOUT 
  }
}
