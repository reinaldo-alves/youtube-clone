import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuStore } from './contexts/menuContext';
import favicon from './assets/youtubeicon.png'
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>  
    <MenuStore>
      <App />
    </MenuStore>
  </React.StrictMode>
);
