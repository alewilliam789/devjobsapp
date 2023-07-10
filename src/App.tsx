
import './App.css'
import Header from './components/Header/Header'

import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <>
    <Header />
    <main className={`flex-column justify-center`}>
      <SearchBar />
    </main>
    </>
  )
}

export default App
