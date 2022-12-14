import { createHtmlElement } from 'utils/createHtml';
import HomeHTML from './Home.html';
import './Home.scss';

export const Home = () => {
  return createHtmlElement(HomeHTML);
};
