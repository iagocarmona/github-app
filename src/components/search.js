import React from 'react'
import propTypes from 'prop-types'

const Search = ({ isDisabled, handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Digite o nome do usuário do github"
      disabled={isDisabled}
      onKeyUp={handleSearch}
    ></input>
  </div>
)

Search.propTypes = {
  handleSearch: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
}

export default Search
