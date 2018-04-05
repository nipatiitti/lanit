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

export const getPosts = () => {
  return (dispatch) => {
    dispatch(loading(true))
    axios.get(`${baseUrl}/api`)
    .then(({data}) => {
      dispatch(newData(data))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}

export const getById = ( id ) => {
  return (dispatch) => {
    dispatch(loading(true))
    axios.get(`${baseUrl}/api/items/${id}`)
    .then(({data}) => {
      dispatch(openItem(data[0]))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
