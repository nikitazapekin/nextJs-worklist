import { Route, Routes, Navigate } from "react-router-dom"
import {
   HOMEPAGE_ROUTE, 
   SIGN_IN_ROUTE,
   SIGN_UP_ROUTE
   
} from "./consts"
import Homepage from "../pages/homepage/homepage"
import LoginPage from "../pages/loginPage/loginPage"
import RegisterPage from "../pages/registerPage/registerPage"
 
export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
     },
     {
        path: SIGN_IN_ROUTE,
        Component: LoginPage
     },
     
   
   {
      path: SIGN_UP_ROUTE,
      Component: RegisterPage
   },
   
 

]
const privateRoutes = [
   {
      path: HOMEPAGE_ROUTE,
      Component: Homepage
   },

   
]
interface AppRoutesProps {
   isAuthenticated: boolean
}
const AppRoutes = ( ): JSX.Element => {
 
 
      return
    
         <Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component   />} />)
            )}


            <Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />

         </Routes>
      
};
export default AppRoutes