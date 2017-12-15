import React, { Component } from 'react';
import './App.css';

var users = [
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users
    };

    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(user) {
    this.setState({users: [...this.state.users, user]});
  }

  handleRemoveUser(index) {
    this.setState({
      users: this.state.users.filter(function (e, i) {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <UserInput
          onAddUser={this.handleAddUser}
          />
      </div>
    );
  }
}
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddUser(this.state);
    this.setState({
      userEmail: '',
      userPassword: '',
    });
  }

  render() {
    return (
      <div>
        <h4>Login</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputUserEmail" className="col-sm-2"></label>
              <div className="col-sm-10">
                <input  name="userEmail"
                        type="text"
                        className="form-control"
                        id="inputUserEmail"
                        value={this.state.userEmail}
                        onChange={this.handleInputChange}
                        placeholder="email"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputUserPassword" className="col-sm-2"></label>
              <div className="col-sm-10">
                <input  name="userPassword"
                        type="text"
                        className="form-control"
                        id="inputUserPassword"
                        value={this.state.userPassword}
                        onChange={this.handleInputChange}
                        placeholder="Password"></input>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Login</button>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Sign Up</button>
              </div>
            </div>
          </form>
      </div>
    );
  }
}
export default App;