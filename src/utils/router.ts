import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';

const ROUTES = {
  '/': Home,
  '/cart': Cart,
};

export const router = () => {
  const rootElement = document.querySelector('#root');
  const url = window.location.hash.slice(1) || '/';
  const route = ROUTES[url];
  console.log(route);
  const page = route();

  if (rootElement) {
    rootElement.innerHTML = '';
    rootElement.appendChild(page);
  }
};
