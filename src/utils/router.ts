import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';

type RoutesData = {
  path: string;
  data: Element | null;
};

const routes: Array<RoutesData> = [
  {
    path: '/',
    data: Home(),
  },
  {
    path: '/cart',
    data: Cart(),
  },
];

const root = document.getElementById('root');

export function appendPage(): void {
  console.log(window.location.pathname);
  const routex = routes.find((route) => route.path == window.location.pathname);
  if (root === null) {
    throw new Error();
  }
  if (routex) {
    const page = routex.data;
    if (page instanceof Node) {
      root.innerHTML = '';
      root.appendChild(page);
    }
  }
}

export function router(event: Event): void {
  event.preventDefault();
  const target = event.target;
  if (target instanceof HTMLAnchorElement) {
    history.pushState({}, 'newUrl', target.href);
  }
  appendPage();
}
