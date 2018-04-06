import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getById } from '../actions/getPosts'
import { addMatch, removeMatch } from '../actions/postAction'

import ItemView from '../components/ItemView'

const mapStateToProps = state => {
  return {
    data: state.data.item,
    admin: state.data.admin,
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getById: ( id ) => (
      dispatch(getById( id ))
    ),
    addMatch: ( id, team1, team2, time, _id ) => (
      dispatch(addMatch( id, team1, team2, time, _id ))
    ),
    removeMatch: ( id, itemId ) => (
      dispatch(removeMatch( id, itemId ))
    )
  }
}

const ItemContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemView))

export default ItemContainer
