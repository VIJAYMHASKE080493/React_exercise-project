import React from "react";

function UserCard(props){
    return(
        <div style={{border: '1px solid gray',padding: '10px',width:'200px', margin:'10px'}}>
            <h2>User Information</h2>
            <p><strong>Name:</strong>{props.name}</p>
            <p><strong>Age:</strong>{props.age}</p>

        </div>
    )
}

export default UserCard;
