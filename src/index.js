import React from 'react';
import ReactDOM from 'react-dom/client';

import { AlertProvider } from './context/alert/AlertContext';
import { ProductsRatingsProvider } from './context/productsRatings/ProductsRatingsContext';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsRatingsProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ProductsRatingsProvider>
  </React.StrictMode>
);