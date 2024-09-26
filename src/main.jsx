import { useEffect } from 'preact/hooks';
import { createBrowserRouter, RouterProvider, useNavigate, useParams } from "react-router-dom";

import { render } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import ErrorPage from './components/ErrorPage';
import LanguageWrapper from "./components/LanguageWrapper.jsx";
import PreLoader from './components/Preloader.jsx'
import './index.css'

const MyDevPortfolio = lazy(() => import('./MyDevPortfolio.jsx'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const LayoutForProjects = lazy(() => import('./components/projects/LayoutForProjects'))
const MazeGrid = lazy(() => import('./components/projects/PathFinder/MazeGrid'))
const Weather = lazy(() => import('./components/projects/Weather/weather.tsx'))

const RedirectBasedOnBrowserLanguage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLanguage = navigator.language;
      if (browserLanguage.includes('hu')) navigate('/hu', { replace: true });
      else navigate('/en', { replace: true });
    }, []);

    // Optionally render nothing or a loading spinner while the redirect happens
    return null;
};

const ValidateLanguage = ({ children }) => {
  const { lang } = useParams();
  if (lang !== 'en' && lang !== 'hu') return <ErrorPage />
  return children;
};

const router = createBrowserRouter([
  {
    path: '/:lang',
    element: (
      <ValidateLanguage>
        <Suspense fallback={<PreLoader />}>
          <MyDevPortfolio />
        </Suspense>
      </ValidateLanguage>),
    errorElement: <ErrorPage />
  },
  {
    path: '/',
    element: <RedirectBasedOnBrowserLanguage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/:lang/projects',
    element: (
      <ValidateLanguage>
        <Suspense fallback={<PreLoader />}>
          <LayoutForProjects />
        </Suspense>
     </ValidateLanguage>),
    children: [
      {
        path:'',
        element: <Portfolio />
      },

      {
        path:'pathfinder',
        element: <MazeGrid />
      },

      {
        path:'weather',
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
