import { UsersMenu, User } from "./usersOfChatComponentStyles";
const users= ["alex", "vasya", "lo;ua"]
const UsersOfChatComponent = () => {
    return ( 
      <UsersMenu>

        {users.map((item)=> (
          <User>

          </User>
        ))}
      </UsersMenu>
     );
}
 
export default UsersOfChatComponent;