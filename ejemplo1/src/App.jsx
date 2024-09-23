import './App.css'
import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { Agregar } from './Agregar.jsx'


//Recibir de BD
const initialUsers = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App() {
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase()
    setSearchTerm(searchValue)
    const filteredUsers = initialUsers.filter(user =>
      user.name.toLowerCase().includes(searchValue) || user.userName.toLowerCase().includes(searchValue)
    )
    setUsers(filteredUsers)
  }

  const agregarUsuario = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser])
  }

  return (
    <>
    <Agregar onAddUser={agregarUsuario} ></Agregar>
    <br />
    <section className='App'>
      <input
        type="text"
        className='Buscar'
        id="Buscar"
        placeholder='Buscar'
        value={searchTerm}
        onChange={handleSearch}
      />
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
      
    </section>
    </>
  )
}
