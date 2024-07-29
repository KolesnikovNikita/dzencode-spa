import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store.js';
import { Provider } from 'react-redux';
import MainLayout from './pages/MainLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <MainLayout></MainLayout>
        </Provider>
    </React.StrictMode>
);
