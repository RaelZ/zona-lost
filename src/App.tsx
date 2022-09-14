import React, { useEffect } from 'react';
import PathRoutes from './PathRoutes';
import './global.css'
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(location.pathname === '/') navigate('/home')
  }, [location.pathname, navigate])

  return (
    <PathRoutes />
  );
}

export default App;
