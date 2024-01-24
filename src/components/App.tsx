import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import "./styles.css"
export const App = () => {
    const [count, setCount] = useState<number>(0);
     const apiUrl = process.env.REACT_APP_API_BASE_URL;
     console.log("API"+apiUrl)
    const increment = () => {
        setCount(prev => prev + 1)
      //  TODO();
    }
   

    return (
        <div data-testid={'App.DataTestId'}>
            
            <div className="testt">test</div>
            
            <div className='test'>
             efwwwwwwwwwwwwwwww
               
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 
            >{count}</h1>
      
    {/*  <h1>{process.env.API_URL}</h1>; */}
 {/*   <h1>{process.env.REACT_APP_API_URL}</h1> */}

 <h1>glob {__PLATFORM__}</h1>
        </div>
    );
};


//npm install dotenv-webpack --save-dev
