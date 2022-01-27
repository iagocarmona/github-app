import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        photo: 'https://avatars.githubusercontent.com/u/69121686?v=4',
        login: 'iagocarmona',
        username: 'Iago Carmona',
        repos: 13,
        followers: 14,
        following: 15,
      },
      repos: [
        {
          name: 'repo',
          link: '#',
        },
      ],
      starred: [
        {
          name: 'repo',
          link: '#',
        },
      ],
    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
