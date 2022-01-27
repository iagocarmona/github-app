import React from 'react'

import Actions from './actions'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'

import propTypes from 'prop-types'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className="app">
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

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
}

export default AppContent
