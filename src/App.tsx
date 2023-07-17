import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useBlurContext } from './context/BlurContext';


import Header from './components/Header/Header'

import './App.css'

function App() {

  const { blur } = useBlurContext()

  return (
    <>
      <div className={`app ${blur}`}>
        <Header />
        <main className={`app-content`}>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
