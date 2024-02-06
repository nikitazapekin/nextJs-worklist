/* import { useState } from "react";
function displayMessage(message: string) {
    console.log(message)
 
}
interface SocketMessageTypes  { 
    user: string,

}
const useWebSocket  = ({socket}: { socket: WebSocket }) => {
    const [amountOfOnlineUsers, setAmountOfOnlineUsers] = useState(0)
  //  const socket = new WebSocket("ws://localhost:5000/ws");
    socket.onopen = function(event) {
      //  setAmountOfOnlineUsers(prev=> prev+1)
        displayMessage("Connected to WebSocket server");
        const el:SocketMessageTypes = { user: `Alex${Math.random()}` };
        console.log(el)
        socket.send(JSON.stringify(el));
     //   socket.send("mess")
    };

    socket.onmessage = function(event) {
        const message = event.data;
        displayMessage("Server: " + message);
    };

    return {amountOfOnlineUsers}
}
 export default useWebSocket  */


 import { useEffect, useState } from "react";
 interface SocketMessageTypes  { 
    user: string,

}
 function displayMessage(message: string) {
    console.log(message)
 
}
const users = ["Alex202", "NEkit", "Shrek2004", "Bob", "feefef"]
// function useWebSocket({ socket }: { socket: WebSocket }) {
    function useWebSocket() {
  const [amountOfOnlineUsers, setAmountOfOnlineUsers] = useState("");
 const [isConnected, setIsConnected] =useState(false)
 useEffect(()=>{
     const socket = new WebSocket("ws://localhost:5000/ws")
if(!isConnected){
    socket.onopen = function (event) {
        setIsConnected(true)
        console.log("Connected to WebSocket server");
    console.log( Math.floor(123*Math.random())%5)
    const el:SocketMessageTypes = { user: `${users[Math.floor(123*Math.random())%5]}` };
    console.log(el)
};
}
  socket.onmessage = function (event) {
    const message= event.data
    console.log("MESS" +message)
    console.log("ONLINE"+message)
    console.log("tip" + typeof message)
   setAmountOfOnlineUsers(String(Math.floor(Number(message)/2)))
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

  return { amountOfOnlineUsers };
}

export default useWebSocket;

 /*
 
    <script>
        const socket = new WebSocket("ws://localhost:5000/ws");
        const messageContainer = document.getElementById("message-container");

        // Event handler for receiving messages from the server
        socket.onmessage = function(event) {
            const message = event.data;
            displayMessage("Server: " + message);
        };

        // Event handler for handling connection open
        socket.onopen = function(event) {
            displayMessage("Connected to WebSocket server");
        };

        // Event handler for handling errors
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

        // Function to send a message to the server
        function sendMessage() {
            const messageInput = document.getElementById("messageInput");
            const message = messageInput.value;
            
            // Send the message to the server
            socket.send(message);

            // Display the sent message
            displayMessage("You: " + message);

            // Clear the input field
            messageInput.value = "";
        }

        // Function to display messages in the message container
        function displayMessage(message) {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;
            messageContainer.appendChild(messageElement);

            // Scroll to the bottom to show the latest message
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    </script>
    */