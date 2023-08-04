import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { ThemeProvider } from './context/ThemeContext.tsx';


import App from './App.tsx';
import Jobs from './components/Jobs/Jobs.tsx';
import JobDescription from './components/JobDescription/JobDescription.tsx';


import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Jobs />
      },
      {
        path: "jobs/:jobId",
        element: <JobDescription />
        
      }
    ]
  }
])


const queryClient = new QueryClient ({
  defaultOptions : {
    queries : {
      cacheTime : 1000 * 60 * 60 * 24,
    }
  }
});


const persister = createSyncStoragePersister({
  storage: window.localStorage
});




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister}}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistQueryClientProvider>
  </React.StrictMode>,
)
