import { createHtmlElement } from 'utils/createHtml';
import Error404HTML from './Error404.html';
import './Error404.scss';

export const Error404 = () => {
  return createHtmlElement(Error404HTML);
};
