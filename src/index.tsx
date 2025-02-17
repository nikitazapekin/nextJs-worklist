/*import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider , Navigate , BrowserRouter , Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './components/App';
 import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import AppRoutes, { publicRoutes } from './utils/routes';
import { HOMEPAGE_ROUTE, SIGN_IN_ROUTE } from './utils/consts';
import { Global } from './components/globalStyles';
import Homepage from './pages/homepage/homepage';
import LoginPage from './pages/loginPage/loginPage';
import { persistor, store } from './store';
import VacancyPage from './pages/vacancyPage/vacancyPage';
import OffersPage from './pages/offersPage/offersPage';
import TestPahe from '../testPage';
import { HashRouter } from 'react-router-dom';
const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}
const container = createRoot(root);
 

container.render(
    <ErrorBoundary>
        <HashRouter>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>

<App />
        </Provider>
        </PersistGate>
        </HashRouter>
   

            </ErrorBoundary>
); */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import { store, persistor } from './store';
import { App } from './components/App';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root element not found');
}

const container = createRoot(root);

container.render(
    <ErrorBoundary>
        <HashRouter>
            <PersistGate loading={null} persistor={persistor}>
                <Provider store={store}>
                    <App />
                </Provider>
            </PersistGate>
        </HashRouter>
    </ErrorBoundary>
);
 