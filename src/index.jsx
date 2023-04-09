import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Home from './Routes/Home'


const rootElement = document.getElementById("root");
render(
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route path="Contact" element={<Contact />} />
            <Route path="Detail" element={<Detail />} />
            <Route path="Favs" element={<Favs />} />
            <Route path="Home" element={<Home />} />
          </Route>
      </Routes>
   </BrowserRouter>,
  rootElement);

