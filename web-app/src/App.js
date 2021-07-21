import React from 'react';
import Auth from './components/sidebar/Sidebar';
import Login from './components/login/Login.js';
import useToken from './components/hooks/useToken.js';
import './App.css';

export default function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <Auth/>
    </div>
  );
}
