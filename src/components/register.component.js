import React, { Component } from 'react';
import Form from 'react-valiadation/build/form';
import Input from 'react-valiadation/build/input';
import ChackButton from 'react-valiadation/build/button';
import AuthService from './services/auth.service';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeUserName(e) {
    this.setState({
      userName: e.target.value
    });
  }
  render() {
    return (
      <form>
        <h3>Sign up</h3>
        <div className='form-group'>
          <label>username</label>
          <input type='text' className='form-control' placeholder='User Name' />
        </div>

        <div className='form-group'>
          <label>password</label>
          <input type='text' className='form-control' placeholder='Password' />
        </div>

        <button className='btn btn-primary btn-block'>Sign up </button>
      </form>
    );
  }
}
