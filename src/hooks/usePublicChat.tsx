

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
import useJwt from "./useJwt";
import { useSelector, useDispatch } from 'react-redux';
import { personalInfSelector } from "../store/selectors/person.selector";
import { fetchGetUsernameFunction } from "../store/slices/getUsername.slice";
import { GetUsersSelector } from "../store/selectors/getUsers.selector";
//interface ChatMessageTypes  {
  /*  type ChatMessageTypes = Array<{

        username: string,
        message: string,
        data: string
    }> */
    interface ChatMessage {
        username: string;
        message: string;
        data: string;
        avatar: string,
    }
    
//}
function usePublicChat() {
  //  const {username} = useSelector(personalInfSelector)
  const username = useSelector(GetUsersSelector)
  console.log("USERNAMEEEEEEEEEEEEE" +JSON.stringify(username))
  console.log("TEST" +username)
   // const dispatch = useDispatch()
   const dispatch = useDispatch()
  //  const [chatHistory, setChatHistory] = useState<String[]>([]);
  
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState<string>("");
    const [isConnected, setIsConnected] = useState(false);
    const [currentMessage, setCurrentMessage] =useState<string>("")
    const {jwtToken} =useJwt()
    useEffect(()=> {
        const token = jwtToken
        console.log("DISPATCHING "+jwtToken)
dispatch(fetchGetUsernameFunction({token}))
//dispatch(fetchGetUsernameFunction(token))
    }, [jwtToken, currentMessage])
    useEffect(()=>  {
console.log("HIST" +JSON.stringify(chatHistory))
for(let i=0; i< chatHistory.length; i++){
    console.log("EL"+JSON.stringify(chatHistory[i]))
}
    }, [chatHistory])
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
            let message = event.data;
            console.log("Парсинг")
            message = JSON.parse(message)
            console.log(message.username)
        //     console.log(JSON.parse(message))
       //      console.log()
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
        const messageObject= {
            username: username,
            token: jwtToken,
            message: currentMessage
                }
                const messageString = JSON.stringify(messageObject);
            const socket = new WebSocket("ws://localhost:5000/publicMessages");
            socket.onopen = function () {
          socket.send(messageString);
                setCurrentMessage("");
                socket.close();
            };
      //  }
    };

    return { chatHistory, message, setMessage, sendMessageToServer, handleChangeMessage };
}

export default usePublicChat;
