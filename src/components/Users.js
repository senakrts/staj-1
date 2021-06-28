import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/Services';
import Parser from 'html-react-parser';

function Users() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    getUsers().then(res => {
      setUserData(
        '<div>Username: ' +
          res.username +
          '</br>Date of birth: ' +
          res.dateBirth +
          '</br>Identification no: ' +
          res.identificationNo +
          '</div>'
      );
    });
  }, []);

  return (
    <div className='users'>
      <div>{Parser(userData)}</div>
    </div>
  );
}

export default Users;
