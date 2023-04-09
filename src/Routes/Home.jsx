import React from 'react'
import Card from '../Components/Card'
import { useContext} from "react";
import globalContext from "../context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistList} = useContext(globalContext)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      <ul>  
      {dentistList.map((dentist) =>{
        return <li id = {dentist.id}><Card name ={dentist.name} username = {dentist.username} id = {dentist.id}/></li>
      })}
      </ul>
      </div>
    </main>
  )
}

export default Home