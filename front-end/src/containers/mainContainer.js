import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getPosts } from '../actions/getPosts'
import { login } from '../actions/utils'

import Main from '../components/Main'

const mapStateToProps = state => {
  return {
    data: state.data.data,
    admin: state.data.admin,
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: ( type ) => (
      dispatch(getPosts(type))
    ),
    login: ( password ) => (
      dispatch(login(password))
    )
  }
}

const MainContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main))

export default MainContainer
