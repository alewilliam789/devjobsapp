import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App.tsx'
import Jobs from './components/Jobs/Jobs.tsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: (<App />),
    children: [
      {
        index: true,
        element: <Jobs />
      },
      {
        path: "jobs:jobId",
        element: (
          <>
            <div>Here's a job</div>
          </>
        )
        
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
