import React from 'react';

const FriendForm = props => {
  return (
    <div className="friendForm" onSubmit={props.handleSubmit}>
      <form action="" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" value={props.nameVal} onChange={props.handleChange} name="nameVal" />
        <label htmlFor="age">Age:</label>
        <input type="text" value={props.ageVal} onChange={props.handleChange} name="ageVal" />
        <label htmlFor="name">Email:</label>
        <input type="email" value={props.emailVal} onChange={props.handleChange} name="emailVal" />
        <button type="submit">Add a friend!</button>
      </form>
    </div>
  );
}
 
export default FriendForm;