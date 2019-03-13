import React from 'react';

const Friend = props => {
  return (
    <div className="friend">
      <p>{props.name}, {props.age} years old</p>
      <p>Contact: {props.email}</p>
      <button onClick={() => props.editFriend(props.id)}>Edit this friend</button>
      <button onClick={() => props.deleteFriend(props.id)}>Delete this friend</button>
    </div>
  );
}
 
export default Friend;