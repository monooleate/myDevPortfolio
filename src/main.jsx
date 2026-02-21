import { useEffect, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigate, useParams } from "react-router-dom";

import LanguageWrapper from "./components/LanguageWrapper.jsx";
import ErrorPage from './components/ErrorPage';
import PreLoader from './components/Preloader.jsx'
import './index.css'

const LayoutForProjects = lazy(() => import('./components/projects/LayoutForProjects'))
const MazeGrid = lazy(() => import('./components/projects/PathFinder/MazeGrid'))
const WeatherApp = lazy(() => import('./components/projects/Weather/WeatherApp'))
const MarkdownPreviewer = lazy(() => import('./components/projects/MarkdownPreviewer/MarkdownPreviewer'))
const ColorGenerator = lazy(() => import('./components/projects/ColorGenerator/ColorGenerator'))
const Calculator = lazy(() => import('./components/projects/Calculator/Calculator'))
const PomodoroTimer = lazy(() => import('./components/projects/PomodoroTimer/PomodoroTimer'))
const MolecularWeight = lazy(() => import('./components/projects/MolecularWeight/MolecularWeight'))
const MyDevPortfolio = lazy(() => import('./MyDevPortfolio.jsx'))
const Portfolio = lazy(() => import('./components/Portfolio'))

const RedirectBasedOnBrowserLanguage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLanguage = navigator.language;
      if (browserLanguage.includes('hu')) navigate('/hu', { replace: true });
      else navigate('/en', { replace: true });
    }, []);

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
        element: <WeatherApp />
      },
      {
        path:'markdown',
        element: <MarkdownPreviewer />
      },
      {
        path:'colors',
        element: <ColorGenerator />
      },
      {
        path:'calculator',
        element: <Calculator />
      },
      {
        path:'pomodoro',
        element: <PomodoroTimer />
      },
      {
        path:'molecular',
        element: <MolecularWeight />
      },
    ],
    errorElement: <ErrorPage/>
  },
]);

createRoot(document.getElementById('root')).render(
  <LanguageWrapper>
    <RouterProvider router={router} />
  </LanguageWrapper>
)
