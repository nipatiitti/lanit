const initialState = {
  data: [],
  item: {},
  admin: false
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DATA':
      return Object.assign({}, state, {
        data: action.data
      })

    case 'OPEN_ITEM':
      return Object.assign({}, state, {
        item: action.data
      })

    case 'LOG_IN':
      if (action.password === 'dev>admin') {
        return Object.assign({}, state, {
          admin: true
        })
      } else {
        return state
      }

    default:
      return state
  }
}

export default data
