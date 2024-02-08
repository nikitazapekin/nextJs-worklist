import NavBar from "../../components/NavBar/NavBar";
import OffersLeftSidePanel from "../../components/OffersLeftSidePanel/OffersLeftSidePanel";
import Footer from "../../components/footer/footer";
import { Global } from "../../components/globalStyles";
import useWebSocket from "../../hooks/useWebSocket";
import { Outlet } from "react-router-dom";
const OffersPage = () => {
  //  const { amountOfOnlineUsers } = useWebSocket({ socket: new WebSocket("ws://localhost:5000/ws") });
  const { amountOfOnlineUsers } = useWebSocket( );
    return ( 
<>
<NavBar />
<Global />
<OffersLeftSidePanel />
<Footer />
<Outlet />
 

</>
     );
    }
    
    export default OffersPage
    //Online {amountOfOnlineUsers} 