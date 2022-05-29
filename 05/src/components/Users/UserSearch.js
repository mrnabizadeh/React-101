import React, {useState} from "react";

import "./UserSearch.module.css";


const UserSearch = props =>{


    const searchUserSubmit = event =>{
        event.preventDefault();
        props.searchValue(event.target[0].value);
        event.target[0].value = "";
    }

    return(
        <form onSubmit={searchUserSubmit}>
            <input type="search" placeholder="search user" />
            <button type="submit">Go</button>
        </form>
    )
}

export default UserSearch;