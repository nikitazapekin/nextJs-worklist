

/*
import { useEffect, useState } from "react";
interface SocketMessageTypes  { 
   user: string,

}
function displayMessage(message: string) {
   console.log(message)

}
 
   function usePublicChat() {
    const [chatHistory, setChatHistory] =useState<String[]>([])
 const [amountOfOnlineUsers, setAmountOfOnlineUsers] = useState("");
const [isConnected, setIsConnected] =useState(false)
useEffect(()=>{
    const socket = new WebSocket("ws://localhost:5000/publicMessages")
if(!isConnected){
   socket.onopen = function (event) {
       setIsConnected(true)
       console.log("Connected to WebSocket server");
   console.log( Math.floor(123*Math.random())%5)
  
};
}
 socket.onmessage = function (event) {
   const message= event.data
   console.log("MESS" +message)
   console.log("ONLINE"+message)
   console.log("tip" + typeof message)
   setChatHistory(prev=>[...prev, message])
 
     displayMessage("Server: " + event.data);
};
socket.onerror = function(error) {
   console.error("WebSocket Error: ", error);
};
socket.onclose = function(event) {
   if (event.wasClean) {
       displayMessage(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
   } else {
       displayMessage('Connection died');
   }
};
}, [isConnected])


 return { chatHistory};
}

export default usePublicChat;

*/


import { useEffect, useState } from "react";

function usePublicChat() {
    const [chatHistory, setChatHistory] = useState<String[]>([]);
    const [message, setMessage] = useState<string>("");
    const [isConnected, setIsConnected] = useState(false);
    const [currentMessage, setCurrentMessage] =useState<string>("")
    const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(event.target.value)
    }
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:5000/publicMessages");

        if (!isConnected) {
            socket.onopen = function (event) {
                setIsConnected(true);
                console.log("Connected to WebSocket server");
            };
        }

        socket.onmessage = function (event) {
            const message = event.data;
            setChatHistory(prev => [...prev, message]);
        };

        socket.onerror = function (error) {
            console.error("WebSocket Error: ", error);
        };

        socket.onclose = function (event) {
            if (event.wasClean) {
                console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            } else {
                console.log('Connection died');
            }
        };

        return () => {
            socket.close();
        };
    }, [isConnected]);

    const sendMessageToServer = () => {
        if (currentMessage.trim() !== "") {
            const socket = new WebSocket("ws://localhost:5000/publicMessages");
            socket.onopen = function () {
                socket.send(currentMessage);
                setCurrentMessage("");
                socket.close();
            };
        }
    };

    return { chatHistory, message, setMessage, sendMessageToServer, handleChangeMessage };
}

export default usePublicChat;
