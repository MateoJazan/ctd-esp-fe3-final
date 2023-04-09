import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import globalContext from './context'



 
function App() {
const [theme, setTheme] = useState("light")

const handleChangeTheme = () =>{
  setTheme(theme === "light" ? "light" : "dark")
}
const [dentistList, setDentistList] = useState(["hola"]);



const fetchDentistList = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await res.json();

  setDentistList(data);
};

useEffect(() => {
  fetchDentistList();
}, []);




  return (
      <div className="App">
        <globalContext.Provider value={{ theme, handleChangeTheme, dentistList}}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </globalContext.Provider>  
      </div>
  );
}

export default App;
