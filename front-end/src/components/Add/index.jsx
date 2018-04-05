import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import MultilineInput from '../MultilineInput'

import Text from '../Text'
import Button from '../Button'

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: '',
      time: '',
      info: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  postItem = () => {
    const { game, time, info } = this.state
    this.props.newPost({game, time, info})
  }


  render() {

    const { game, time, info } = this.state

    return (
      <div className="add-container">
        <div className="add-item">
          <Text text="game: " />
          <Input
            onChange={this.handleChange('game')}
            placeholder="game"
            value={game}
          />
        </div>

        <div className="add-item">
          <Text text="time [xx:xx]: " />
            <Input
              onChange={this.handleChange('time')}
              placeholder="time"
              value={time}
            />
        </div>

        <div className="add-item">
          <Text text="Extra info: " />
            <MultilineInput
              onChange={this.handleChange('info')}
              placeholder="Info"
              value={info}
            />
        </div>


        <Button text="Add new" onClick={this.postItem}/>
      </div>
    )
  }
}

Add.propTypes = {
  newPost: PropTypes.func.isRequired
}

export default Add
