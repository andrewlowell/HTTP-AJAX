import React from 'react';
import axios from 'axios';

class FriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log('Response', res);
      this.setState({friends: res.data});
    })
    .catch(err => {
      console.log('There was an error', err);
    })
  }

  render() {
    return (
      <div className="friendContainer">
        {this.state.friends.map(f => {
          return (
            <div className="friend">
              <p>{f.name}, {f.age} years old</p>
              <p>Contact: {f.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
 
export default FriendContainer;