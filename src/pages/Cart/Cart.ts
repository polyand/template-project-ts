import { createHtmlElement } from 'utils/createHtml';
import CartHTML from './Cart.html';
import './Cart.scss';

export const Cart = () => {
  return createHtmlElement(CartHTML);
};
