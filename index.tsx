
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Tailwind config is referenced by the CDN script in index.html, 
// but we apply global styles (like font) via index.html or tailwind.config.js for component-level utilities.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
