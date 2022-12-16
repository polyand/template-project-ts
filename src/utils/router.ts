import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';
import { Error404 } from 'pages/Error404';

type RoutesData = {
  data: Element | null;
  path?: string;
};

const routes: Array<RoutesData> = [
  {
    data: Home(),
    path: '/',
  },
  {
    data: Cart(),
    path: '/cart',
  },
];

const error404: RoutesData = {
  data: Error404(),
}

const root = document.getElementById('root');

export function appendPage(): void {
  console.log(window.location.pathname);
  let route: RoutesData | undefined = routes.find((road) => road.path == window.location.pathname);
  if (route === undefined) {
    route = error404;
  }
  if (root === null) {
    throw new Error();
  }
  if (route) {
    const page = route.data;
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
