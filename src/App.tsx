import { Outlet } from 'react-router-dom';

import { useThemeContext } from './context/ThemeContext';
import { JobsProvider } from './context/JobsContext';

import Header from './components/Header/Header'

import './App.css'



function App() {

  const { theme } = useThemeContext();

  return (
    <>
      <div className={`app ${theme}`}>
        <Header />
        <main className={`app-content`}>
          <JobsProvider>
            <Outlet />
          </JobsProvider>
        </main>
      </div>
    </>
  )
}

export default App
