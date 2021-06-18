import { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  state = {};
  componentDidMount() {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    axios.get('http://localhost:8080/api/users', config).then(
      res => {
        console.log('res', res);
        this.setstate({
          user: res.data
        });
      },

      err => {
        console.log('sorry', err);
      }
    );
  }

  render() {
    if (this.state.user) {
      return <h2>Hi {this.state.user} </h2>;
    }
    return <h2>you are not logged in</h2>;
  }
}
