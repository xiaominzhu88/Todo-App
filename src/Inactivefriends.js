import React from 'react';
import Button from '@material-ui/core/Button';

function InactiveFriends(props) {
  return (
    <div className="inactive">
      <h2>
        {' '}
        You have <span style={{ color: 'red' }}>{props.list.length}</span>
        <br />
        Inactive Friends
      </h2>
      <ul className="inactive-friends">
        {props.list.map((friend) => (
          <li key={friend.id}>
            <span>{friend.name}</span>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: 5, marginBottom: 5 }}
              onClick={() => props.onAdd(friend)}
            >
              +
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InactiveFriends;
