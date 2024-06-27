import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import ErrorPage from './components/ErrorPage';
import Layout_Project from './components/Layout_Project'
import MazeGrid from './components/projects/MazeGrid'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/portfolio',
    element: <Layout_Project/>,
    children: [
      {
        path:'/portfolio',
        element: <Portfolio/>
      },

      {
        path:'/portfolio/1',
        element: <MazeGrid/>
      },

    ],

    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
