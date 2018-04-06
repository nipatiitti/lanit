import React, { Component } from 'react'
import PropTypes from 'prop-types'

import history from '../../history'

import { NavLink } from 'react-router-dom'

import PostItem from './PostItem'

import Input from '../Input'
import Button from '../Button'
import Text from '../Text'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: ''
    }
  }

  componentDidMount() {
    this.props.getPosts()
    console.log(this.props.data);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })

    this.props.login(event.target.value)
  }

  render() {

    const { data, loading, admin } = this.props

    return (
      <div className='mainView'>
        <Text text="Turnaukset" />
        {
          admin ?
            <NavLink to="/add">
              <Button text="Add new"/>
            </NavLink>
          :
            <Input
              onChange={this.handleChange('password')}
              placeholder="admin password"
              value={this.state.password}
            />
        }
        {!loading && data.map(item => (
          <PostItem
            {...item}
            key={item._id}
            onClick={() => history.push(`/items/${item._id}`)}
            admin={admin}
            deleteThis={this.props.removeDocument}/>
        ))}
      </div>
    )
  }
}

Main.propTypes = {
  getPosts: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default Main
