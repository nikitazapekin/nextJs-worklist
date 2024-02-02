import { useEffect } from "react";
import useJwt from "../../hooks/useJwt";
import {  NavBarBackground, Navbar, NavBarItem, NavBarWrapper, SubNavBarItem, NavBarItems} from "./styles.NavBar";
import { Link } from "react-router-dom";
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
            <NavBarItem>CV</NavBarItem>       
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