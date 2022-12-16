import { appendPage, router } from 'utils/router';

window.addEventListener('click', router);
window.addEventListener('popstate', appendPage);
document.addEventListener('DOMContentLoaded', appendPage);
