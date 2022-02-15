import React from 'react'
import propTypes from 'prop-types'

import { Wrapper, Input } from './style'

const Search = ({ isDisabled, handleSearch }) => (
  <Wrapper>
    <Input
      type="text"
      placeholder="Digite o nome do usuário do github"
      disabled={isDisabled}
      onKeyUp={handleSearch}
    ></Input>
  </Wrapper>
)

Search.propTypes = {
  handleSearch: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
}

export default Search
