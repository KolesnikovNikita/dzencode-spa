import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import MainLayout from './pages/MainLayout.jsx';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/store.js';

const store = configureStore({
    reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <MainLayout />
        </Provider>
    </React.StrictMode>
);
