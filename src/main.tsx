import React from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
