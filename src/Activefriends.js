import React from "react";

function ActiveFriends(props) {
  return (
    <div className="active">
      <h2>Active Friends</h2>
      <ul className="active-friends">
        {props.list.map(friend => (
          <li key={friend.id}>
            <span>{friend.name}</span>
            <button onClick={() => props.onRemove(friend)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ActiveFriends;
