import React from 'react';

const FriendFormEdit = props => {
  return (
    <div className="friendFormEdit" onSubmit={props.handleEdit}>
      <form action="" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" value={props.nameValEdit} onChange={props.handleChange} name="nameValEdit" />
        <label htmlFor="age">Age:</label>
        <input type="text" value={props.ageValEdit} onChange={props.handleChange} name="ageValEdit" />
        <label htmlFor="name">Email:</label>
        <input type="email" value={props.emailValEdit} onChange={props.handleChange} name="emailValEdit" />
        <button type="submit">Submit this edit!</button>
      </form>
    </div>
  );
}
 
export default FriendFormEdit;