import React from 'react';
import axios from 'axios';
import FriendForm from './FriendForm';

class FriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      nameVal: '',
      ageVal: '',
      emailVal: ''
    }
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log('Response', res);
      this.setState({friends: res.data});
    })
    .catch(err => {
      console.log('There was an error', err);
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitting');
    axios.post('http://localhost:5000/friends', {name: this.state.nameVal, age: this.state.ageVal, email: this.state.emailVal})
    .then(res => {
      console.log('Response', res);
      this.setState({nameVal: '', ageVal: '', emailVal: ''});
      this.getFriends();
    })
    .catch(err => {
      console.log('There was an error', err);
    });
  }  

  render() {
    return (
      <div className="friendContainer">
        <FriendForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          nameVal={this.state.nameVal}
          ageVal={this.state.ageVal}
          emailVal={this.state.emailVal}
        />
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