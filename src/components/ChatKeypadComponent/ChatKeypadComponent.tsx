import { ChatInput, ChatKeypad, ChatMessage, ChatOfVacancy, ChatSendImage, ChatSmiley, ChatSmileyImage, ChatWrapper } from "./ChatKeypadStyles";
import Smiley from  "../../assets/smiley.png"
import Send from "../../assets/send.png"
import useChat from "../../hooks/useChat";
import usePublicChat from "../../hooks/usePublicChat";
const ChatKeypadComponent = () => {
  //  const {handleChangeMessage} =useChat()
    const {sendMessageToServer, handleChangeMessage, chatHistory} =  usePublicChat()
 //   const {chatHistory} =usePublicChat()
    console.log("HIST"+chatHistory)
    return ( 
        <>
             <ChatOfVacancy>
                <ChatWrapper>
               {chatHistory.map((item)=> (
                <ChatMessage>
                    {item}
                </ChatMessage>
               ))}
                </ChatWrapper>
                            <ChatKeypad>
                                <ChatInput placeholder="Type message" onChange={(event)=>handleChangeMessage(event)} />
                                <ChatSmiley>
                                    <ChatSmileyImage src={Smiley} alt="smiley" />
                                </ChatSmiley>
                                <ChatSmiley>
                           <ChatSendImage
                           onClick={sendMessageToServer}
                           src={Send} alt="smiley"/>
                                </ChatSmiley>
                            </ChatKeypad>
                        </ChatOfVacancy>
        </>
     );
}
 
export default ChatKeypadComponent;