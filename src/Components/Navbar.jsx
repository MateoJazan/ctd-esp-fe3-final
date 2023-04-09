import React from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/Home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Favs">Favs</Link>
      {/* ESTA VA EN CADA CARD, NO ACA <Link to="/Detail/:id">Detail</Link>*/}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar