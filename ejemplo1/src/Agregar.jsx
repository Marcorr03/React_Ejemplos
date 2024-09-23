import './index.css'
import './App.css'
import { useState } from 'react'

export function Agregar({ onAddUser }) {
  const [nombre, setNombre] = useState('')
  const [usuario, setUsuario] = useState('')

  const handleAgregarUsuario = () => {
    if (nombre.trim() && usuario.trim()) {
      const newUser = {
        userName: usuario,
        name: nombre,
        isFollowing: false
      }
      onAddUser(newUser)
      setNombre('')
      setUsuario('')
    } else {
      alert('Por favor ingresa un nombre y un usuario válidos.')
    }
  }

  return (
    <article className='App2' style={{ alignItems: 'center' }}>
      <h1>Nuevo Usuario</h1>
        <label>Nombre</label>
        <input
          type="text"
          className='Buscar'
          id="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Usuario</label>
        <input
          type="text"
          className='Buscar'
          id="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      <button className='tw-followCard-button' onClick={handleAgregarUsuario}>
        Agregar
      </button>
    </article>
  )
}
