import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const TestApp = () => {
    const [users, setUsers] = useState([])
    const loadUsers = async () => {
        const res =await  axios.get("https://jsonplaceholder.typicode.com/users")
setUsers(res.data)
    }
    useEffect(()=> {
loadUsers()
    }, [])
    return ( 
<>
<h1>Hello world</h1>
      <button>Click me</button>
      <input type="text" placeholder="Input value" />
      {users.map(user => <div     
key={user.id}
data-testid="user-item"
>
{user.name}
</div>
)}
</>

     );
}
 
export default TestApp;