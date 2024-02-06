import NavBar from "../../components/NavBar/NavBar";
import OffersLeftSidePanel from "../../components/OffersLeftSidePanel/OffersLeftSidePanel";
import { Global } from "../../components/globalStyles";
import useWebSocket from "../../hooks/useWebSocket";

const OffersPage = () => {
  //  const { amountOfOnlineUsers } = useWebSocket({ socket: new WebSocket("ws://localhost:5000/ws") });
  const { amountOfOnlineUsers } = useWebSocket( );
    return ( 
<>
<NavBar />
<Global />
<OffersLeftSidePanel />
Online {amountOfOnlineUsers} 

</>
     );
}
 
export default OffersPage