import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
navigator.serviceWorker.register('background.js')
  .then(() => {
    console.log('Service worker registered');
  })
  .catch((error) => {
    console.error('Error registering service worker:', error);
});
