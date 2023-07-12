
import { Outlet } from 'react-router-dom';




import Header from './components/Header/Header'
import Jobs from './components/Jobs/Jobs'
import SearchBar from './components/SearchBar/SearchBar'

import './App.css'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
