import React from 'react'
import propTypes from 'prop-types'
import Lottie from 'react-lottie-player'

// Assets
import Loading from '../../assets/loading-lottie.json'

// Components
import Actions from '../Actions/actions'
import Repos from '../Repos/repos'
import Search from '../Search/search'
import UserInfo from '../UserInfo/user-info'

import {
  SearchWrapper,
  LoadingWrapper,
  Container,
  Image,
  UserInfoWrapper,
  ReposWrapper,
} from './style'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  showImage,
}) => (
  <Container showImage={showImage}>
    <SearchWrapper>
      {showImage && <Image />}
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
    </SearchWrapper>
    <LoadingWrapper>
      {isFetching && (
        <Lottie
          loop
          animationData={Loading}
          play
          style={{ width: '15rem', height: '15rem' }}
        />
      )}
    </LoadingWrapper>
    <UserInfoWrapper>
      {!!userinfo && <UserInfo userinfo={userinfo} />}
      <ReposWrapper>
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
        {!!repos.length && (
          <Repos className="repos" title="Repositórios:" repos={repos} />
        )}
        {!!starred.length && (
          <Repos className="starred" title="Favoritos:" repos={starred} />
        )}
      </ReposWrapper>
    </UserInfoWrapper>
  </Container>
)

AppContent.propTypes = {
  userinfo: propTypes.object,
  repos: propTypes.array.isRequired,
  starred: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  handleSearch: propTypes.func.isRequired,
  getRepos: propTypes.func.isRequired,
  getStarred: propTypes.func.isRequired,
  showImage: propTypes.bool.isRequired,
}

export default AppContent
