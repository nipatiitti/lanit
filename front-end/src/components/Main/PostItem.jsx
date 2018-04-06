import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../components/Text'
import Button from '../../components/Button'

const Main = ({ game, time, info, _id, onClick, admin, deleteThis }) => (
  <div className="postItem" onClick={onClick}>
    <Text text={`${game} starts at ${time}`} />
    {
      admin &&
      <Button text="Delete" onClick={() => deleteThis(_id)}/>
    }
  </div>
)

Main.propTypes = {
  game: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Main
