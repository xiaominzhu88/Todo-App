import React from 'react';
import Button from '@material-ui/core/Button';

function ActiveFriends(props) {
  return (
    <div className="active">
      <h2>
        You have <span style={{ color: 'red' }}>{props.list.length}</span>
        <br />
        Active Friends
      </h2>
      <ul className="active-friends">
        {props.list.map((friend) => (
          <li key={friend.id}>
            <span>{friend.name}</span>

            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: 5, marginBottom: 5 }}
              onClick={() => props.onRemove(friend)}
            >
              -
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ActiveFriends;
