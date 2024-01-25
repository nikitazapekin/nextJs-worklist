import {  NavBarBackground, Navbar, NavBarItem, NavBarWrapper, SubNavBarItem, NavBarItems} from "./styles.NavBar";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <Navbar background="black">
            <NavBarWrapper>

            <NavBarItem>
            <Link style={{textDecoration: "none", color: "#fff"}} to="/">
                Home
                </Link>
                </NavBarItem>
            <NavBarItem>Offers</NavBarItem>
            <NavBarItem>CV</NavBarItem>       
            <NavBarItems>

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
            </NavBarItems>
            </NavBarWrapper>
<NavBarBackground />
        </Navbar>
      );
}
 
export default NavBar;