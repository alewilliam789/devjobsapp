import { useState } from 'react';
import { Outlet } from 'react-router-dom';


import Header from './components/Header/Header'

import './App.css'

function App() {

  const [blur, setBlur] = useState<string>("")

  return (
    <>
      <div className={`app ${blur}`}>
        <button onClick={()=>{setBlur("blur")}}>Here's the blur</button>
        <Header />
        <main className={`app-content`}>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
