import { useState } from 'react';
import { Outlet } from 'react-router-dom';


import Header from './components/Header/Header'

import './App.css'

function App() {

  return (
    <>
      <div className={`app`}>
        <Header />
        <main className={`app-content`}>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
