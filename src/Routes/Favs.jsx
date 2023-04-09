import React, { useContext } from "react";
import Card from "../Components/Card";
import globalContext from "../context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favIds = JSON.parse(localStorage.getItem("favs"))
  const {dentistList} = useContext(globalContext)
  const favDentists = dentistList.filter(dentist => favIds.includes(dentist.id))

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        <ul>  
          {favDentists.map((dentist) =>{
            return <li id = {dentist.id}><Card name ={dentist.name} username = {dentist.username} id = {dentist.id}/></li>
      })}
      </ul>
      </div>
    </>
  );
};

export default Favs;
