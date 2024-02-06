import { Route, Routes, Navigate } from "react-router-dom"

import {
   HOMEPAGE_ROUTE, 
   SIGN_IN_ROUTE,
   SIGN_UP_ROUTE,
   TYPE_CODE_ROUTE,
   PERSONAL_PAGE_ROUTE,
   OFFERS_PAGE_ROUTE,
   VACANCY_ROUTE
} from "./consts"

import Homepage from "../pages/homepage/homepage"
import LoginPage from "../pages/loginPage/loginPage"
import RegisterPage from "../pages/registerPage/registerPage"
import TypeCodePage from "../pages/tydeCodePage/typeCodePage"
 import PersonalPage from "../pages/PersonalPage/PersonalPage"
import OffersPage from "../pages/offersPage/offersPage"
import VacancyPage from "../pages/vacancyPage/vacancyPage"
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
   
   {
      path: TYPE_CODE_ROUTE,
      Component: TypeCodePage
   },
   {
      path: PERSONAL_PAGE_ROUTE,
      Component: PersonalPage
   },
 {
   path: OFFERS_PAGE_ROUTE,
   Component: OffersPage
 },
 {
   path: VACANCY_ROUTE,
   Component: VacancyPage
 }

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