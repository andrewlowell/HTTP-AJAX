import React from 'react';
import axios from 'axios';
import FriendForm from './FriendForm';
import FriendFormEdit from './FriendFormEdit';
import Friend from './Friend';

class FriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      nameVal: '',
      ageVal: '',
      emailVal: '',
      nameValEdit: '',
      ageValEdit: '',
      emailValEdit: '',
      editing: ''
    }
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      // console.log('Response', res);
      this.setState({friends: res.data});
    })
    .catch(err => {
      // console.log('There was an error', err);
    });
  }

  deleteFriend = id => {
    // console.log('deleting :)');
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      // console.log('Response', res);
      this.getFriends();
    })
    .catch(err => {
      console.log('There was an error in deleteFriend:', err);
    });
  }

  editFriend = id => {
    this.setState({
      editing: id,
      friends: this.state.friends.map(f => {
        if (f.id === id) {
          this.setState({nameValEdit: f.name, ageValEdit: f.age, emailValEdit: f.email});
          return {
            id: f.id,
            name: f.name,
            age: f.age,
            email: f.email,
            editing: true
          };
        }
        else {
          return f;
        }
      })
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(e.target);
  }

  handleEdit = e => {
    e.preventDefault();
    // console.log('editing');
    axios.put(`http://localhost:5000/friends/${this.state.editing}`, {name: this.state.nameValEdit, age: this.state.ageValEdit, email: this.state.emailValEdit})
    .then(res => {
      // console.log('Response', res);
      this.setState({nameValEdit: '', ageValEdit: '', emailValEdit: '', editing: ''});
      this.getFriends();
    })
    .catch(err => {
      // console.log('There was an error', err);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log('submitting');
    axios.post('http://localhost:5000/friends', {name: this.state.nameVal, age: this.state.ageVal, email: this.state.emailVal})
    .then(res => {
      console.log('Response', res);
      this.setState({nameVal: '', ageVal: '', emailVal: ''});
      this.getFriends();
    })
    .catch(err => {
      // console.log('There was an error', err);
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
          if (f.editing) {
            return <FriendFormEdit
              handleChange={this.handleChange}
              handleEdit={this.handleEdit}
              nameValEdit={this.state.nameValEdit}
              ageValEdit={this.state.ageValEdit}
              emailValEdit={this.state.emailValEdit}
            />
          }
          return ( <Friend name={f.name} age={f.age} email={f.email} id={f.id} deleteFriend={this.deleteFriend} editFriend={this.editFriend} /> );
        })}
      </div>
    );
  }
}
 
export default FriendContainer;