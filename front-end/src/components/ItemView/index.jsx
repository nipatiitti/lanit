import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import Button from '../Button'
import Input from '../Input'
import Text from '../Text'

class ItemView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      team1: '',
      team2: '',
      time: ''
    }
  }

  componentDidMount() {
    this.props.getById(this.props.match.params.id)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addMatch() {
    const { team1, team2, time } = this.state

    this.props.addMatch(this.props.match.params.id, team1, team2, time, this.makeid() )

    this.setState({
      team1: '',
      team2: '',
      time: ''
    })
  }

  makeid() {
    let text = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
  }

  deleteMatch(_id) {
    this.props.removeMatch(this.props.match.params.id, _id)
  }


  render() {
    const { data, loading, admin } = this.props

    return (
      <div className='mainView'>
        <Text text={'Teams:'} />
        {admin &&
          <div className="addNewTeam">
            <Input
              onChange={this.handleChange('team1')}
              placeholder="team1"
              value={this.state.team1}
            />
            <Input
              onChange={this.handleChange('team2')}
              placeholder="team2"
              value={this.state.team2}
            />
            <Input
              onChange={this.handleChange('time')}
              placeholder="time"
              value={this.state.time}
            />

            <Button text="Add new" onClick={() => this.addMatch()}/>
          </div>
        }
        {
          !loading && data.matches && data.matches.map(match => (
            <div key={match._id}>
              <Text text={`${match.team1} vs ${match.team2} at ${match.time}`} />
              {
                admin &&
                <Button text="Delete" onClick={() => this.deleteMatch(match._id)}/>
              }
            </div>
          ))
        }
      </div>
    )
  }
}

ItemView.propTypes = {
  getById: PropTypes.func.isRequired,
  addMatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default ItemView
