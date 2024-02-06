import React, {useState} from 'react';

// import classes from './App.module.scss';
// import "./test.css"
import {Link, Outlet} from "react-router-dom";
// TREE SHAKING
function TODO() {
 //   TODO2()
}

function TODO2() {
   // throw new Error();
}

export const Te = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1)
      //  TODO();
    }
    return (
        <div data-testid={'App.DataTestId'}>
            
            <div className="testt">test</div>
            
            <div>
                asfasfasfasfbebrereb
             brehrerhe
                asfasfasfasf1111asfasfasfasfasfasf
               
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 
         //  className={classes.value}
            >{count}</h1>
      
         
        </div>
    );
};
