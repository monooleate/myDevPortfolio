import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'

import MyDevPortfolio from './MyDevPortfolio.jsx'
import Portfolio from './components/Portfolio'
import ErrorPage from './components/ErrorPage';
import LanguageWrapper from "./components/LanguageWrapper.jsx";
import './index.css'

const LayoutForProjects = lazy(() => import('./components/projects/LayoutForProjects'))
const MazeGrid = lazy(() => import('./components/projects/PathFinder/MazeGrid'))
const Weather = lazy(() => import('./components/projects/Weather/weather.tsx'))

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
