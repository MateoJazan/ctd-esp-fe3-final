import React, { useContext } from "react";
import globalContext from "../context";
import { Link } from 'react-router-dom'
import "../styles.css"

const Card = ({ name, username, id}) => {

  const {theme} = useContext(globalContext)
  const {favs} = useContext(globalContext)
  const {setFavs} = useContext(globalContext)
  let count = 0

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (localStorage.getItem("favs") === null){
      localStorage.setItem("favs", JSON.stringify([""]))
    }
    if (!favs.includes(id)){
      setFavs([...favs, id])
      localStorage.setItem("favs", JSON.stringify(favs))
    }
  }

  return (
    <div className={"card "+ {theme}}>
        <p className={theme}>Dentist ID is: {id}</p>
        <p>Dentist name is: {name}</p>
        <p>Dentist username is: {username}</p>
        <Link to={"/Detail/"+id}>Details</Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
