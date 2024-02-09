import { ChatBlock, ChatInput, ChatKeypad, ChatMessage, ChatMessageText, ChatOfVacancy, ChatSendImage, ChatSmiley, ChatSmileyImage, ChatUsername, ChatWrapper, UserAvatar, UserAvatarImage } from "./ChatKeypadStyles";
import Smiley from "../../assets/smiley.png"
import Send from "../../assets/send.png"
import useChat from "../../hooks/useChat";
import usePublicChat from "../../hooks/usePublicChat";
const ChatKeypadComponent = () => {
    //  const {handleChangeMessage} =useChat()
    const { sendMessageToServer, handleChangeMessage, chatHistory } = usePublicChat()
    //   const {chatHistory} =usePublicChat()
    console.log("HIST" + chatHistory)
    console.log("CUR" + JSON.stringify(chatHistory))
    return (
        <>
            <ChatOfVacancy>
                <ChatWrapper>
                    {chatHistory.map((item, index) => (
                        <ChatMessage key={index}>
                            <UserAvatar>
                                <UserAvatarImage 
                                alt="logo"
                                src={`http://localhost:5000/worklist.com/image?title=${item.avatar}`} 
                                />
                            </UserAvatar>
                            <ChatBlock>
                                <ChatUsername>
                                    {item.username}
                                </ChatUsername>
                                <ChatMessageText>
                                    {item.message}
                                </ChatMessageText>
                            </ChatBlock>
                        </ChatMessage>
                    ))}
                </ChatWrapper>
                <ChatKeypad>
                    <ChatInput placeholder="Type message" onChange={(event) => handleChangeMessage(event)} />
                    <ChatSmiley>
                        <ChatSmileyImage src={Smiley} alt="smiley" />
                    </ChatSmiley>
                    <ChatSmiley>
                        <ChatSendImage
                            onClick={sendMessageToServer}
                            src={Send} alt="smiley" />
                    </ChatSmiley>
                </ChatKeypad>
            </ChatOfVacancy>
        </>
    );
}

export default ChatKeypadComponent;