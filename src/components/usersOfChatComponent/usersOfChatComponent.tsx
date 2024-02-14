import { UsersMenu, User, UserLogo, UserWrapper, UserUsername, UserLastMessage, UserTitleWrapper, IsUserOnline } from "./usersOfChatComponentStyles";
import Test from "../../assets/LinkeId.png"
import { useNavigate } from "react-router-dom";
const users = ["alex", "vasya", "lo;ua"]
const UsersOfChatComponent = () => {
  const navigate = useNavigate()
  const handleNavigate= () => {
navigate(`/personal/${1}`)
  }
  return (
    <UsersMenu>
      {users.map((item) => (
        <User
        onClick={handleNavigate}
        >
          <UserLogo src={Test} alt="user logo" /> 
          <UserWrapper>
            <UserTitleWrapper>
              <UserUsername>
                {item}
              </UserUsername>
              <IsUserOnline></IsUserOnline>
            </UserTitleWrapper>
            <UserLastMessage>
              ndcj cak sacmkcs s
            </UserLastMessage>
          </UserWrapper>
        </User>
      ))}
    </UsersMenu>
  );
}

export default UsersOfChatComponent;