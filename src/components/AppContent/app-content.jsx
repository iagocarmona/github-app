import React from 'react'

import Actions from '../Actions/actions'
import Repos from '../Repos/repos'
import Search from '../Search/search'
import UserInfo from '../UserInfo/user-info'

import propTypes from 'prop-types'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
}) => (
  <div className="app">
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="starred" title="Favoritos:" repos={starred} />
    )}
  </div>
)

AppContent.propTypes = {
  userinfo: propTypes.object,
  repos: propTypes.array.isRequired,
  starred: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  handleSearch: propTypes.func.isRequired,
  getRepos: propTypes.func.isRequired,
  getStarred: propTypes.func.isRequired,
}

export default AppContent
