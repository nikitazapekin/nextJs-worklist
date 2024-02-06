import React, {useState} from 'react';

import {Link, Outlet} from "react-router-dom";
import "./styles.css"
export const App = () => {
    const [count, setCount] = useState<number>(0);
     const apiUrl = process.env.REACT_APP_API_BASE_URL;
     console.log("API"+apiUrl)
    return (
        <div data-testid={'App.DataTestId'}>
        </div>
    );
};



