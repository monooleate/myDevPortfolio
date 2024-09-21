import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { render } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import MyDevPortfolio from './MyDevPortfolio.jsx'
import Portfolio from './components/Portfolio'
import ErrorPage from './components/ErrorPage';
import LanguageWrapper from "./components/LanguageWrapper.jsx";
import PreLoader from './components/Preloader.jsx'
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
    element: <Suspense fallback={<PreLoader />}><LayoutForProjects /></Suspense>,
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



render(
  <LanguageWrapper>
    <RouterProvider router={router} />
  </LanguageWrapper>,
  document.getElementById('root')
)
