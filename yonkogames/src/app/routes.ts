import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { TeamPage } from './components/TeamPage';
import { CartPage } from './components/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'products/:team', Component: TeamPage },
      { path: 'cart', Component: CartPage },
    ],
  },
]);
