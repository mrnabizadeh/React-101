import React from 'react';

import UserItem from './UserItem';

const UsersList = props => {
    if(!props.users.length) {
        return <h1>No User Found.</h1>;
    }
    return (<ul>
        {props.users.map(user => (
            <UserItem 
            key={user.id}
            email={user.email}
            age={user.age}
            />
        ))}
    </ul>)
}

export default UsersList;