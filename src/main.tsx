import React from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirstApp title="Nato Gourmet" subtitle="Software Engineer" />
  </React.StrictMode>
);
