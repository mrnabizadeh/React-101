import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import UserSearch from './components/Users/UserSearch';


function App() {
  
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState('');

  const addUserHandler = (email, age) => {

    if(email.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Inputs',
        message: 'Please Enter a valid email and age.'
      });
      return;
    }
    if(+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age'
      });
      return;
    }
    // userList.some(user => user.email === email)
    if(usersList.find(user => user.email === email)) {
      setError({
        title: 'Duplicate Email',
        message: 'Email address must be unic.'
      });
      return;
    }
    setUsersList(prevUsersList => [...usersList, {email , age, id: Math.random().toString()}]);
  };

  let search_userList;
  const searchHandler = search_Value =>{
    search_userList = usersList.map(user =>{
      return user.email;
    })

    //console.log(search_userList);

    const search_userList_Filtered = search_userList.filter(user =>{
      return user.includes(search_Value);
    })

    //console.log(search_userList_Filtered);


  }

  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UserSearch searchValue={searchHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
