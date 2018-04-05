import {loading, error, baseUrl} from './utils'
import axios from 'axios'

import history from '../history'

export const newData = ( data ) => {
  return {
    type: 'NEW_DATA',
    data
  }
}

export const openItem = ( data ) => {
  return {
    type: 'OPEN_ITEM',
    data
  }
}

export const newPost = ( postObject ) => {
  return (dispatch, getState) => {
    const oldData = getState().data.data
    dispatch(loading(true))
    axios.post(`${baseUrl}/api`, {
      ...postObject
    })
    .then(({data}) => {
      dispatch(newData(oldData.concat([data])))
      dispatch(loading(false))
      history.push('/')
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}

export const addMatch = ( id, team1, team2, time ) => {
  return (dispatch) => {
    console.log("here");
    dispatch(loading(true))
    axios.post(`${baseUrl}/api/items/${id}`, {
      type: 'match',
      team1,
      team2,
      time
    })
    .then(({data}) => {
      console.log(data);
      dispatch(openItem(data))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
