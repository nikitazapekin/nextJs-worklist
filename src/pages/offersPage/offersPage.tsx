import NavBar from "../../components/NavBar/NavBar";
import { Global } from "../../components/globalStyles";
import useWebSocket from "../../hooks/useWebSocket";

const OffersPage = () => {
  //  const { amountOfOnlineUsers } = useWebSocket({ socket: new WebSocket("ws://localhost:5000/ws") });
  const { amountOfOnlineUsers } = useWebSocket( );
    return ( 
<>
<NavBar />
<Global />
Online {amountOfOnlineUsers} 
</>
     );
}
 
export default OffersPage