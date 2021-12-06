import { useState, useEffect } from "react"
import UsersListItem from "./UsersListItem";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://randomuser.me/api/?results=10&inc=gender,email,name,picture')
            .then((res) => res.json())
            .then(json => setUsers(json.results));
    }, [])
    console.log(users);
    
    return (
        <section>
            <h2>Users Section</h2>
            <div className="scroll-container">
                <ul class="users-list">
                    {users.map((user, index) => 
                        <UsersListItem 
                            user={user}
                            key={index}
                        />
                    )}
                </ul>
            </div>
        </section>
    )
}

export default UsersList