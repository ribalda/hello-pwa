window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://ribalda.github.io/hello-pwa/sw.js');
  }
}
