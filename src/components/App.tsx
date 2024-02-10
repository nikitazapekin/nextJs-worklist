/*import React, {useState} from 'react';

import {Link, Outlet} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { publicRoutes } from '../utils/routes';
import { Routes } from 'react-router-dom';
import "./styles.css"
export const App = () => {
    const [count, setCount] = useState<number>(0);
     const apiUrl = process.env.REACT_APP_API_BASE_URL;
     console.log("API"+apiUrl)
    return (
        <div >

<BrowserRouter>
<Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component   />} />)
            )}

            


</Routes> 
    </BrowserRouter>  
 
        </div>
    );
};



*/


import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../utils/routes';
import "./styles.css";

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    console.log("API" + apiUrl);

    return (
        <div>
            <HashRouter>
                <Routes>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Routes>
            </HashRouter>
        </div>
    );
};
