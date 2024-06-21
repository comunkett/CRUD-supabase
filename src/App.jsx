import './App.css';
// import Login from './pages/Login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../src/pages/Login';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import { useEffect } from 'react';
import { supabase } from './supabase/client';
import { ContextApiProvider } from './components/context/Context.api';

function App() {

const navigate = useNavigate()
// Esto lo que hace es solicitarle al usuario que primero ingrese su correo para que luego pueda acceder al Home.jsx:
  useEffect(()=>{
    
    supabase.auth.onAuthStateChange((event, session)=>{
      if(!session){
        navigate('/login')
      }else{
        navigate('/')
      }
    })
  },[navigate])

  return (
    
    <ContextApiProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </ContextApiProvider>
   
  )
}

export default App
