import React from 'react'
import propTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img src={userinfo.photo} alt="user" />
    <h1>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>
    <ul className="repos-info">
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: propTypes.shape({
    username: propTypes.string.isRequired,
    repos: propTypes.number.isRequired,
    followers: propTypes.number.isRequired,
    following: propTypes.number.isRequired,
    photo: propTypes.string.isRequired,
    login: propTypes.string.isRequired,
  }),
}

export default UserInfo
