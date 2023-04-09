import React, { useContext, useState } from "react";
import globalContext from "../context";


const Form = () => {
  const {theme} = useContext(globalContext)
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const onChangeNombre = (e) =>{
    setNombre(e.target.value)

  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onSubmitForm = (e) => {
    
    e.preventDefault()  
    console.log(emailCheck(email))
    if (!emailCheck(email) && !nombreCheck){
        alert('error')
      }
    }
  const emailCheck = (email) =>{
    const regex = /^\S+@\S+\.\S+$/ 
    return regex.test(email)
  }  
  const nombreCheck = (nomb) =>{
    return !(nomb.length <5)
  }
  return (
    <div>
      <form onSubmit={onSubmitForm} className = {theme}>
        <label htmlFor="nombre">Nombre (minimo 5 caracteres)</label>
        <input 
          type="text"
          id="nombre"
          placeholder='Ingresa tu Nombre'
          value={nombre}
          onChange={onChangeNombre}
        />
        <label htmlFor="email">Email (Debe ser un formato valido)</label>
        <input 
          type="text"
          id="email"
          placeholder='Ingresa tu email'
          value={email}
          onChange={onChangeEmail}
        />
        <button type="submit">Enviar</button> 
      </form>
    </div>
  );
};

export default Form;
