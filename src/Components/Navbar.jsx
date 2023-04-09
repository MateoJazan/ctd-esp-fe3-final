import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import globalContext from '../context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme} = useContext(globalContext)
  const {handleChangeTheme} = useContext(globalContext) 

  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/Home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme} >Change theme</button>
    </nav>
  )
}

export default Navbar