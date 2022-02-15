import React from 'react'
import propTypes from 'prop-types'

const Actions = ({ getRepos, getStarred }) => (
  <div className="actions">
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

Actions.prototype = {
  getRepos: propTypes.func.isRequired,
  getStarred: propTypes.func.isRequired,
}

export default Actions
