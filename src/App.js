import React from 'react'

const App = () => {
  return (
    <div className="app">
      <div className="search">
        <input
          type="search"
          placeholder="Digite o nome do usuário do github"
        ></input>
      </div>
      <div className="user-info">
        <img src="https://avatars.githubusercontent.com/u/69121686?v=4" />
        <h1>
          <a href="https://github.com/iagocarmona">Iago Carmona </a>
        </h1>
        <ul className="repos-info">
          <li>Repositórios: 13</li>
          <li>Seguidores: 23</li>
          <li>Seguindo: 54</li>
        </ul>
        <div className="actions">
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>
        <ul className="repos">
          <h2>Repositórios:</h2>
          <li>
            <a href="#">Nome do repositório</a>
          </li>
          <li>
            <a href="#">Nome do repositório</a>
          </li>
        </ul>
        <div className="starred">
          <h2>Favoritos:</h2>
          <ul>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
