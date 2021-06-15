import { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  //async getData(data) {
  //console.log('data', data);
  // const res = await
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.userName,
      password: this.password
    };
    axios
      .post('http://localhost:8080/api/login', data)
      .then(res => {
        console.log('res', res);
        localStorage.setItem('token', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // console.log('userName', this.userName, 'password', this.password);
  //this.getData(data);

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
          <label>username</label>
          <input
            type='text'
            className='form-control'
            placeholder='User Name'
            onChange={e => (this.userName = e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>password</label>
          <input
            type='text'
            className='form-control'
            placeholder='Password'
            onChange={e => (this.password = e.target.value)}
          />
        </div>

        <button className='btn btn-primary btn-block'> Login </button>
      </form>
    );
  }
}
