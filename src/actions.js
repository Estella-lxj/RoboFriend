import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import axios from 'axios';


export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  }
}

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}