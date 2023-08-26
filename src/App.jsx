/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useEffect } from 'react'
import { useFetch } from './components/useFetch';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Dash from './components/Dash';
import Alumnos from './components/Alumnos';
import Pagos from './components/Pagos';
import Inventario from './components/Inventario';

//configs

function App() {
  const [showActive, setshowActive] = useState(true);
  const showActiveNav = ()=>{
      setshowActive(true);
    }

  return (

    <main className='mainContainer'>
    <div className='sideBar'>
      <NavBar showActiveNav={showActiveNav}/>
    </div>
    <Routes>
      <Route path="/" element={<Dash/>}/>
      <Route path="/Alumnos" element={<Alumnos/>}/>
      <Route path="/Pagos" element={<Pagos/>}/>
      <Route path="/Inventario" element={<Inventario/>}/>
    </Routes>
    
    </main>
    
  )
}

export default App
