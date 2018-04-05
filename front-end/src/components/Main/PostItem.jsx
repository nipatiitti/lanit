import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../components/Text'

const Main = ({ game, time, info, onClick }) => (
  <div className="postItem" onClick={onClick}>
    <Text text={`${game} starts at ${time}`} />
  </div>
)

Main.propTypes = {
  game: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Main
