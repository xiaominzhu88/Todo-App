import React from "react";


function InactiveFriends (props) {
  return (
    <div className="inactive">
      <h2>Inactive Friends</h2>
      <ul className="inactive-friends">
        {props.list.map(friend => (
          <li key={friend.id}>
            <span>{friend.name}</span>
            <button onClick={() => props.onAdd(friend)}>+</button>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default InactiveFriends;
