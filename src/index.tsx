import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { Te } from './components/Te';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}><Te /></Suspense>,
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><Te /></Suspense>,
            },
        ],
    },
]);

container.render(
    <RouterProvider router={router} />
);
