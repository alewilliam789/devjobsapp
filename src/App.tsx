
import { Outlet } from 'react-router-dom';


import Header from './components/Header/Header'

import './App.css'

function App() {

  return (
    <>
    <Header />
    <main className={`app-content`}>
      <Outlet />
    </main>
    </>
  )
}

export default App
