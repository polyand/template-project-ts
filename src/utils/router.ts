import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';

const routes = {
  '/': Home,
  '/cart': Cart,
};

export const router = () => {
  const rootElement = document.querySelector('#root');
  const url = window.location.hash.slice(1) || '/';
  const route = routes[url];
  const page = route();

  if (rootElement) {
    rootElement.appendChild(page);
  }
};
