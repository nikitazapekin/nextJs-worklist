import { useEffect } from "react";

import { Link } from "react-router-dom";

import {  NavBarBackground, Navbar, NavBarItem, NavBarWrapper, SubNavBarItem, NavBarItems, NavBarItemSearch} from "./styles.NavBar";

import useJwt from "../../hooks/useJwt";
const NavBar = () => {
    const {jwtToken} =useJwt()
    useEffect(()=> {
console.log("jwt"+jwtToken)
    }, [jwtToken])
    return (
        <Navbar background="black">
            <NavBarWrapper>
            <NavBarItem>
            <Link style={{textDecoration: "none", color: "#fff"}} to="/">
                Home
                </Link>
                </NavBarItem>
            <NavBarItem>
            <Link style={{textDecoration: "none", color: "#fff"}} to="/offers">
                Offers
            </Link>
                </NavBarItem>

                {/*
            <NavBarItem>CV</NavBarItem>   */}
                 <NavBarItem>
                    <NavBarItemSearch placeholder="Type username" />
                 </NavBarItem>
            <NavBarItems>
{jwtToken==null ? (
<>
    <SubNavBarItem>
                <Link style={{textDecoration: "none", color: "#fff"}} to="/sign_up">
                    Sign up
                </Link>
                    </SubNavBarItem>
                <SubNavBarItem>
                  <Link style={{textDecoration: "none", color: "#fff"}} to="/sign_in">
                      Sign in
                    </Link>
                    </SubNavBarItem>
</>
                    ) : (
                        <SubNavBarItem>
                        <Link style={{textDecoration: "none", color: "#fff"}} to="/personal">
                         Account
                          </Link>
                          </SubNavBarItem>
                    )}
            </NavBarItems>
                    </NavBarWrapper>
<NavBarBackground />
        </Navbar>
      );
}
 
export default NavBar;