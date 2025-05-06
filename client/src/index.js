import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'// bọc con App trong PersisGate, nó giúp con react delay việc render UI cho tới khi store được updated
import { Provider } from 'react-redux';
import reduxStore from './redux';
import { BrowserRouter } from 'react-router-dom' // dùng để quản lý tất cả các router trong app

const { store, persistor } = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </PersistGate>
</Provider>
);


