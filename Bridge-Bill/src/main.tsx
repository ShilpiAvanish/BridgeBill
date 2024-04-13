import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.css'

import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Analysis from './Pages/Analysis.tsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/BillAnalysis",
      element: <Analysis/>,
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
