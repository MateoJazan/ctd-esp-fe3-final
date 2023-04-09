import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import globalContext from '../context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const Detail = () => {
    const {theme} = useContext(globalContext)
    const {Id} = useParams()
    const [dentist, setDentist] = useState('')
    const fetchDentist = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/"+Id
      );
      const data = await res.json();
      setDentist(data)
      };
    
      useEffect(() => {
        fetchDentist();
      }, []);   
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={theme}>
      <h1>Detail Dentist {Id} </h1>
      <h3>{dentist.name}</h3>
      <h3>{dentist.email}</h3>
      <h3>{dentist.phone}</h3>
      <h3>{dentist.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail