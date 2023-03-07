import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { APP_ROUTES } from './constants';
import Layout from './components/Layout';

const Favorites = lazy(() => import('./components/Favorites'));
const NotFound = lazy(() => import('./components/NotFound'));
const Home = lazy(() => import('./components/Home'));
const PokemonDetails = lazy(() => import('./components/PokemonDetails'));

export default function Router() {
  const routes = useRoutes([
    {
      path: APP_ROUTES.BASE,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ':pokemonName',
          element: <PokemonDetails />,
        },
      ],
    },
    {
      path: APP_ROUTES.FAVORITES,
      element: <Favorites />,
    },
    {
      path: APP_ROUTES.NOTFOUND,
      element: <NotFound />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <Layout>{routes}</Layout>;
}