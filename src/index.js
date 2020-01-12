import { install } from './plugin-fontawesome';

// if (!window.$docsify) {
//   window.$docsify = {}
// }
window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(install);
