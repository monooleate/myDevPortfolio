import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'

import MyDevPortfolio from './MyDevPortfolio.jsx'
import ErrorPage from './components/ErrorPage';
import LayoutForProjects from './components/projects/LayoutForProjects'
import MazeGrid from './components/projects/PathFinder/MazeGrid'
import Weather from './components/projects/Weather/weather.tsx'
import Portfolio from './components/Portfolio'
import './index.css'
import LanguageWrapper from "./components/LanguageWrapper.jsx";




const router = createBrowserRouter([
  {
    path: '/',
    element: <MyDevPortfolio />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects',
    element: <LayoutForProjects />,
    children: [
      {
        path:'/projects',
        element: <Portfolio />
      },

      {
        path:'/projects/pathfinder',
        element: <MazeGrid />
      },

      {
        path:'/projects/weather',
        element: <Weather />
      },

    ],

    errorElement: <ErrorPage/>
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageWrapper>
      <RouterProvider router={router} />
    </LanguageWrapper>
  </React.StrictMode>,
)
