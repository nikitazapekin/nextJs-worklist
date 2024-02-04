import { Chat, ChatNavBar, ChatNavBarItem, ChatNavBarSearch, ChatNavBarSearchWrapper, ChatWrapper, SearchImage, SearchWrapper } from "./ChatComponentStyles";
import Search from "../../assets/search.png"
import UsersOfChatComponent from "../usersOfChatComponent/usersOfChatComponent";
const ChatComponent = () => {
    return ( 

   <Chat>
    <ChatNavBar>
        <ChatNavBarSearchWrapper>
        <ChatNavBarItem>Your chats</ChatNavBarItem>
            <ChatNavBarSearch placeholder="Search user" />
            <SearchWrapper>
              <SearchImage  src={Search} alt="search" /> 
            </SearchWrapper>
        </ChatNavBarSearchWrapper>
<ChatNavBarItem>Create group</ChatNavBarItem>
    </ChatNavBar>
<ChatWrapper>

   <UsersOfChatComponent>
    
   </UsersOfChatComponent>
</ChatWrapper>

   </Chat>
     );
}
 
export default ChatComponent;